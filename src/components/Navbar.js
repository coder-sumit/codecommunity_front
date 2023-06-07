import styles from "../styles/navbar.module.css";
import {FaHome, FaUserCircle} from "react-icons/fa";
import {AiOutlineUser, AiOutlineBell} from "react-icons/ai";
import {MdOutlineForum, MdPostAdd} from "react-icons/md";
import {BiSearch} from "react-icons/bi";
import {BsChatDots, BsFillBellFill, BsFillChatDotsFill} from "react-icons/bs";
import profile from "../assets/images/profile.jpg";
import { Outlet } from "react-router-dom";
const Navbar = ()=>{
    return (
      <>
      <div className={styles.rightBar}>
        <div className={styles.navbar}>
       
          <div className={styles.start}>
            <h3 className={styles.link}>
                <FaHome  className={styles.homeIcon}/> <span>Home</span>
            </h3>
          </div>

          <div className={styles.mid}>
             <div className={styles.searchDiv}>
             <BiSearch className={styles.searchIcon}/>
             <input placeholder="Explore Code Community..." type="text"/>
             <div className={styles.searchBtns}>
             <MdPostAdd className={styles.icon}/>
              <AiOutlineUser className={styles.icon}/>
              <MdOutlineForum className={styles.icon}/>
              
             </div>
             </div>
          </div>

          <div className={styles.end}>
             <BsFillChatDotsFill className={styles.icons}/>
             <BsFillBellFill className={styles.icons}/>
             <div className={styles.profDiv}>
                <p>coder_sumit</p>
                <img src={profile} alt="profile"></img>
             </div>
          </div>

       </div>
       </div>
       <Outlet/>
       </>
    )
}

export default Navbar;