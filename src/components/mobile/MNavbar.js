import styles from "../../styles/mnavbar.module.css";
import mlogo from "../../assets/images/mlogo.png";
import profile from "../../assets/images/profile.jpg";
// import {FaHome, FaUserCircle} from "react-icons/fa";
// import {AiOutlineUser, AiOutlineBell} from "react-icons/ai";
// import {MdOutlineForum, MdPostAdd} from "react-icons/md";
import {BiSearch} from "react-icons/bi";
import { BsFillBellFill, BsInfoCircleFill} from "react-icons/bs";
const MNavbar = ()=>{
     return (
        <div className={styles.mnavbar}>
             <img className={styles.logo} src={mlogo}/>
             <div className={styles.searchDiv}>
               <BiSearch className={styles.searchIcon}/>
               <input placeholder="Explore Code Community..." type="text"/>
            
             </div>

             <div className={styles.end}>
             <BsFillBellFill className={styles.icons}/>
             <BsInfoCircleFill className={styles.icons} />
             
             <div className={styles.profDiv}>
                <img src={profile} alt="profile"></img>
             </div>
          </div>

        </div>
     )
}

export default MNavbar;