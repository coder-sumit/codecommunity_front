import styles from "../../styles/mfooter.module.css";
import {FaHome, FaUserCircle} from "react-icons/fa";
import {BsFillChatDotsFill} from "react-icons/bs";


const MFooter = ()=>{
     return (
        <div className={styles.mfooter}>
           <FaHome />
           <BsFillChatDotsFill/>
           <FaUserCircle />
        </div>
     )
}

export default MFooter;