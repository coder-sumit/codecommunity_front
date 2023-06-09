import styles from "../../styles/mfooter.module.css";
import {FaHome, FaUserCircle} from "react-icons/fa";
import {BsFillChatDotsFill} from "react-icons/bs";
import { NavLink } from "react-router-dom";


const MFooter = ()=>{
     return (
        <div className={styles.mfooter}>
          <NavLink style={({isActive}) => isActive? {color: "#2d85f7"}: undefined} className={styles.link}  to="/">

           <FaHome />
          </NavLink>
          <NavLink style={({isActive}) => isActive? {color: "#2d85f7"}: undefined} className={styles.link}  to="/chatroom">
           <BsFillChatDotsFill/>
           </NavLink>

           <NavLink style={({isActive}) => isActive? {color: "#2d85f7"}: undefined} className={styles.link}  to="/profile">
           <FaUserCircle />
           </NavLink>
        </div>
     )
}

export default MFooter;