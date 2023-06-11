import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { login as userLogin, me, register as userRegister } from "../apis";
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
            setLoading(false);
        }
        fetchData();

        
       
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
    const register = async(body)=>{
        let response = await userRegister(body);
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
       removeItemFromLocalStorage(LOCALSTORAGE_TOKEN_KEY);
       setUser(null);
       return;
    }

    return {
        user,
        login,
        logout,
        register,
        loading,
    }

}