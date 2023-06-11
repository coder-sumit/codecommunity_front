import styles from "../styles/sidebar.module.css";
import logo from "../assets/images/logo.png"
import mlogo from "../assets/images/mlogo.png";
import {FaHome, FaUserCircle} from "react-icons/fa";
import {BsInfoCircleFill} from "react-icons/bs";
import {MdForum} from "react-icons/md";
import {FiSettings} from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import {TrendingCard} from "./";
import { useAuth } from "../hooks";


const SideBar = ()=>{
    let user = useAuth().user;

    return (
        <div className={styles.sidebar}>
    
   
        <Link to="/">
         <div className={styles.logoDiv}>
             <img src={mlogo} className={styles.mlogo} />
             <img src={logo} className={styles.logo} />
         </div>
         </Link>
        {/* Sidbar links */}
 
         <div className={styles.sideLinks}>
             <NavLink style={({isActive}) => isActive? {color: "#2d85f7"}: undefined} className={styles.link}  to="/">
                 <FaHome /> Home
             </NavLink>
             <NavLink style={({isActive}) => isActive? {color: "#2d85f7"}: undefined} className={styles.link}  to="/forum">
                 <MdForum /> Forum
             </NavLink>
             <NavLink style={({isActive}) => isActive? {color: "#2d85f7"}: undefined} className={styles.link}  to="/aboutme">
                 <BsInfoCircleFill /> About Me
             </NavLink>
         </div>
 
         {/* Trending Posts */}
 
         <div className={styles.trending}>
             <h2>Trending</h2>
             <div className={styles.trendingScroll}>
              <TrendingCard/>
              <TrendingCard/>
              <TrendingCard/>
              <TrendingCard/>
              <TrendingCard/>
             </div>
         </div>
 
         {/* Setting DIv */}
         <div className={styles.settingDiv}>
        
 
         {/* <NavLink style={({isActive}) => isActive? {color: "#2d85f7"}: undefined} className={styles.link}  to="/settings">
                 <FiSettings /> Settings
         </NavLink> */}
 
         <NavLink style={({isActive}) => isActive? {color: "#2d85f7"}: undefined} className={styles.link}  to={`/${user?.username}`}>
                 <FaUserCircle /> Profile
         </NavLink>
        
         </div>
 
 
 
         </div> 
    )
}

export default SideBar;