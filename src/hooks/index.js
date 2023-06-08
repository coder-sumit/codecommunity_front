import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { login as userLogin, me } from "../apis";
import { setItemInLocalStorage, getItemFromLocalStorage, LOCALSTORAGE_TOKEN_KEY, removeItemFromLocalStorage } from "../utils";
import jwt from "jwt-decode";

export const useAuth = ()=>{
    return useContext(AuthContext);
}

export const useProvideAuth = ()=>{
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const userToken = getItemFromLocalStorage(LOCALSTORAGE_TOKEN_KEY);
        async function fetchData(){
            if(userToken){
                let user =  await me();
                user = user.data;
                setUser(user);
            }
        }
        fetchData();

        
        setLoading(false);
    }, []);

    const login = async(username, password)=>{

        let response = await userLogin(username, password);
        if(response.success){
            setItemInLocalStorage(LOCALSTORAGE_TOKEN_KEY, response.data.token);
            let user = await me();
            user = user.data;
            setUser(user);
            return {
                success: true,
            }
        }else{
            return {
                success: false,
                message: response.message
            }
        }
    }

    const logout = ()=>{
       return removeItemFromLocalStorage(LOCALSTORAGE_TOKEN_KEY);
    }

    return {
        user,
        login,
        logout,
        loading,
    }

}