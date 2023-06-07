import {useState } from "react";
import styles from "../styles/createComment.module.css";
import {FaTelegramPlane} from "react-icons/fa";
import profile from "../assets/images/profile.jpg";

const CreateCommentReply = ()=>{
    const [commentReply, setCommentReply] = useState('');
    const handleCommentReply = (e)=>{
        setCommentReply(e.target.value)
    }
   return (
     <div className={styles.createComment}>
           <img src={profile}/>
           <div className={styles.inputBox}>
           <input type="text" onChange={handleCommentReply} value={commentReply} placeholder="Make reply on Comment..."/>
           <FaTelegramPlane className={styles.icon} />
           </div>
     </div>
   )
}

export default CreateCommentReply;