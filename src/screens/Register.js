import { useState } from "react";
import styles from "../styles/register.module.css";
import { Link , useNavigate} from "react-router-dom";
import { checkUsername, checkMobile } from "../apis";
import { useAuth } from "../hooks";
import {toast } from 'react-toastify';


const Register = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  if(auth.user){
    navigate("/");
  }
  
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeat_password, setRepeatPassword] = useState("");
  const [dob, setDob] = useState("");
  const [mobile, setMobile] = useState("");
  const [gender, setGender] = useState("");
  const [userExists, setUserExists] = useState(false);
  const [mobileExists, setMobileExists] = useState(false);
  const [isInvalidMobile, setIsInvalidMobile] = useState(false);
  const [isChild, setIsChild] = useState(false);
  const [passNotMatched, setPassNotMatched] = useState(false);
  const [IsInvalidPass, setIsInvalidPass] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

 
  const handleFormSubmit = async(e) => {
    e.preventDefault();
    setIsRegistering(true);
    // fix date formate
    let finalDob = dob.split("-");
    finalDob = `${finalDob[2]}/${finalDob[1]}/${finalDob[0]}`;
    
    // create body
    const body = {
        name,
        username,
        password,
        repeat_password,
        dob: finalDob,
        mobile,
        gender,
        code_kldge: "NA",
    };

    let response = await auth.register(body);
      
      if(response.success){
        toast.success("Registration Successful...");
        navigate("/");
      }else{
        toast.error(response.message);
        setIsRegistering(false);
        return;
      }
   

  };


  const handleUsernameBlur = async()=>{
    if(username){
        let response = await checkUsername(username);
      if(response.success){
        setUserExists(response.data.exists);
      } 
    }
  };

  const handleMobileBlur = async()=>{
    if(mobile){
        let response = await checkMobile(mobile);
        const mobileRegex = /^\d{10}$/;
        if(mobileRegex.test(mobile)){
           setIsInvalidMobile(false);
        }else{
            setIsInvalidMobile(true);
        }
        if(response.success){
            setMobileExists(response.data.exists);
          } 
    }
  };
  const handleDOBChange = (e)=>{
    const dateOfBirth = new Date(e.target.value);
    const currentDate = new Date();
    const age = currentDate.getFullYear() - dateOfBirth.getFullYear();
    const hasPassedBirthday = currentDate.getMonth() > dateOfBirth.getMonth() ||
    (currentDate.getMonth() === dateOfBirth.getMonth() && currentDate.getDate() >= dateOfBirth.getDate());
    const finalAge = hasPassedBirthday ? age : age - 1;

    if(finalAge < 14){
        setIsChild(true);
    }else{
        setIsChild(false);
    }
   
    setDob(e.target.value);

  };
  const handleCPassChange = (e)=>{
      setRepeatPassword(e.target.value);
      if(password !== e.target.value){
        setPassNotMatched(true);
      }else{
       setPassNotMatched(false);
      }
  }
  const handlePassChange = (e)=>{
    setPassword(e.target.value);
    let passregex = /^[a-zA-Z0-9]{3,30}$/;
    if(passregex.test(e.target.value)){
        setIsInvalidPass(false);
     }else{
         setIsInvalidPass(true);
     }
  }
  

  return (
    <div className={styles.regFormCard}>
      <h2>Join CodeCommunity and Unlock Your Coding Potential</h2>
    <form onSubmit={handleFormSubmit} >
      <div className={styles.feildDiv}>
        
        <input
          type="text"          
          value={name}
          required
          placeholder="Enter Your Name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className={styles.feildDiv}>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          required
          onChange={(e)=>{setUsername(e.target.value)}}
          onBlur={handleUsernameBlur}
        />
        {userExists && <small className={styles.errMsg}>username taken...</small>}
      </div>

      <div className={styles.feildDiv}>
       
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          required
          onChange={handlePassChange}
        />
        {IsInvalidPass &&  <small className={styles.errMsg}>3-30 character only alphabets and numbers...</small>}
      </div>

      <div className={styles.feildDiv}>
        <input
          type="password"
          placeholder="Confirm Password"
          required
          value={repeat_password}
          onChange={handleCPassChange}
        />
        {passNotMatched && <small className={styles.errMsg}>password and repeat_password not matched...</small>}
      </div>

      <div className={styles.feildDiv}>
      <label htmlFor="dob">DOB:</label>
        <input
          type="date"
          id="dob"
          placeholder="Select Date Of Birth"
          required
          value={dob}
          onChange={handleDOBChange}
        />
        {isChild && <small className={styles.errMsg}>age must be 14 or more...</small>}
      </div>

      <div className={styles.feildDiv}>
        <input
          type="text"
          placeholder="Enter Your Mobile"
          value={mobile}
          required
          onChange={(e) => setMobile(e.target.value)}
          onBlur={handleMobileBlur}
        />
        {mobileExists && <small className={styles.errMsg}>Already exists...</small>}
        {isInvalidMobile && <small className={styles.errMsg}>Invalid Mobile...</small>}
      </div>

      <div className={styles.feildDiv}>
        <select
          id="gender"
          required
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="">Select Gender</option>
          <option value="M">Male</option>
          <option value="F">Female</option>
          <option value="O">Other</option>
        </select>
      </div>

      <button   
      className={styles.submitBtn}
      type="submit" disabled={(userExists || mobileExists || isChild || isInvalidMobile || IsInvalidPass || passNotMatched)}>
      {isRegistering?'Registering...': 'Register'}  
        
        </button>
    </form>
      <p><small>Already have an account? <Link className={styles.loginLink} to="/login">Log in here</Link></small></p>
    </div>
  )
}

export default Register;
