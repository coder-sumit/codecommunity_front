import styles from "../styles/navbar.module.css";
import {FaHome, FaUserCircle} from "react-icons/fa";
import {AiOutlineUser, AiOutlineBell} from "react-icons/ai";
import {MdOutlineForum, MdPostAdd} from "react-icons/md";
import {BiSearch} from "react-icons/bi";
import {BsChatDots, BsFillBellFill, BsFillChatDotsFill} from "react-icons/bs";
import userImg from "../assets/images/user.jpg";
import { Link, Outlet } from "react-router-dom";
import {useAuth} from "../hooks";
import { IMAGE_ROOT } from "../utils";


const Navbar = ()=>{
   let profileImage = userImg;
   let user = useAuth().user;
   let userName = 'user';
   let name = 'coder';
   if(user){
      userName = user.username;
      name = user.name.split(" ")[0];
      if(user.profile_pic){
         profileImage = `${IMAGE_ROOT}/${user.profile_pic}`;
      }
   }
   
   
    return (
      <>
        <div className={styles.navbar}>
       
          <div className={styles.start}>
            <h3 style={{textTransform: "capitalize"}} className={styles.link}>
                {/* <FaHome  className={styles.homeIcon}/> <span>Home</span> */}
                Welcome {name}
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
               <Link to="/profile">
                <p>{userName}</p>
                <img src={profileImage} alt={userName}></img>
                </Link>
             </div>
          </div>

       </div>
       
       
       </>
    )
}

export default Navbar;