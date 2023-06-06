import {useState } from "react";
import styles from "../styles/createComment.module.css";
import {FaTelegramPlane} from "react-icons/fa";
import profile from "../assets/images/profile.jpg";

const CreateComment = ()=>{
    const [comment, setComment] = useState('');
    const handleComment = (e)=>{
        setComment(e.target.value)
    }
   return (
     <div className={styles.createComment}>
           <img src={profile}/>
           <div className={styles.inputBox}>
           <input type="text" onChange={handleComment} value={comment} placeholder="Write Comment on Post..."/>
           <FaTelegramPlane className={styles.icon} />
           </div>
     </div>
   )
}

export default CreateComment;