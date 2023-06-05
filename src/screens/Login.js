import { useState } from 'react';
import styles from "../styles/login.module.css";
import logo from "../assets/images/logo.png";
import google from "../assets/images/google.svg";
import github from "../assets/images/github.svg";

const LoginPage = ()=> {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange =(e)=>{
      setUsername(e.target.value);
  }
  const handlePasswordChange = (e)=>{
    setPassword(e.target.value);
  }


  const handleSubmit = (e)=>{
    e.preventDefault();  
    console.log(username, password);
    setPassword("");
    setUsername("");
  }

   return (
      <div className={styles.loginContainer}>
        <div className={styles.left}>
          <img src={logo} alt='logo'/>
          <p>
            Welcome to our Social Media Community! Connect with fellow users, share your thoughts, and explore exciting content. Please login to access the app and start your social journey. We're thrilled to have you as part of our vibrant community!<br/><br/>
            Social Media App for CODERS
          </p> 
          <small>Don't have an account ?</small> <br/>
          <a href='#' className={styles.btn}>
            Register
          </a>

    
        </div>
        <div className={styles.right}>
           <h2>Login</h2>
           <form onSubmit={handleSubmit}>
            <div className={styles.inputDiv}>
            <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            placeholder='Username'
          />
        </div>
        <div className={styles.inputDiv}>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder='Password'
          />
        </div>
        <button type="submit">Login</button>
      </form> <br/>
      <small>Forget Password ? <a href="#">Recover...</a></small>

       <div className={styles.dottedLine}></div>
       

        <div className={styles.authIcon}>
          <div>
              <img src={google} alt='google'/>
          </div>
           <div>
              <img src={github} alt='google'/>
          </div>
          <div>

          </div>
        </div>

        </div>

      </div>
   );
}

export default LoginPage;