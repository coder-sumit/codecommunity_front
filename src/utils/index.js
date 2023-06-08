export * from "./constants";

export const setItemInLocalStorage = (key, value)=>{
    if(!key || !value){
        return console.error("cannot store in LS");
    }

    const valueToStore = typeof value != 'string'? JSON.stringify(value): value;

    localStorage.setItem(key, valueToStore);
}

export const getItemFromLocalStorage = (key)=>{
    if(!key){
        return console.error("cannot get item from LS");
    }

    return localStorage.getItem(key);
}

export const removeItemFromLocalStorage = (key)=>{
    if(!key){
        return console.error("cannot remove item from LS");
    }

    return localStorage.removeItem(key);
}