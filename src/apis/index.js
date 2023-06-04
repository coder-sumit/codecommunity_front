import { API_URLS, LOCALSTORAGE_TOKEN_KEY } from "../utils";

const customFetch = async(url, {body, ...customConfig})=>{
    const token = window.localStorage.getItem(LOCALSTORAGE_TOKEN_KEY);

    const headers = {
        'content-type': 'application/json',
    }

    if(token){
        headers.Authorization = `Bearer ${token}`;
    }

    const config = {
        ...customConfig,
        headers: {
            ...headers,
            ...customConfig.headers,
        },
    }

    if(body){
        config.body = JSON.stringify(body);
    }

    try{
        const response = await fetch(url, config);
        const data = await response.json();
        console.log(data);

        if(data.success){
            return {
                data: data.data,
                success: true
            };
        }

        // throw new Error(data.message);
        return {
            message:data.message,
            success: false
        }

    }catch(error){
        // console.error(error);
        return {
            message: error.message,
            success: false
        }
    }
}