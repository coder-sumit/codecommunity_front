import { useAuth } from "../hooks";
import { useNavigate, Outlet } from "react-router-dom";
import { useEffect } from "react";
import {Loader} from "../components";


const Restricted = ({children})=>{
   const navigate = useNavigate();
   const auth = useAuth();
    useEffect(() => {
        if (!auth.user) {
          navigate("/login");
        }
      }, [auth.user, navigate]);

      return children;
}

export default Restricted;