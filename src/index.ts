import useSWR, { mutate } from 'swr';

const globalConfigAlias: string = "reactglobalState";

/**
 * Retorna um State mutável global armazenado no localStorage
 * @param key Chave do valor
 */
export function useGlobalState(key: string, initialValue: any){
    //Retorna um objeto da LocalStorage
    const {data} = useSWR(`${globalConfigAlias}-${key}`, async () => {
        const ls = localStorage.getItem(globalConfigAlias);
        if(!ls){
            //Caso não exista objeto
            return initialValue || null;
        }else{
            //Caso exista, retorna a entrada guardada
            return JSON.parse(ls)[key]
        }
    })
    return data;
}

/**
 * Insere um estado global mutável no local storage
 * @param key Chave do Valor
 * @param value Valor
 */
export function setGlobalState(key: string, value: string){
    const ls = localStorage.getItem(globalConfigAlias);
    if(!ls){
        //Caso não exista um objeto
        localStorage.setItem(globalConfigAlias, JSON.stringify({[key]: value}));
    }else{
        //Caso exista, procura a entrada e atualiza caso exista.
        localStorage.setItem(globalConfigAlias, JSON.stringify({...JSON.parse(ls), [key]: value}));
    }
    mutate(`${globalConfigAlias}-${key}`, value);
}