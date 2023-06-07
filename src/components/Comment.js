import styles from "../styles/comment.module.css";
import profile from "../assets/images/profile.jpg";
import {BsReplyAllFill} from "react-icons/bs";
import {CreateCommentReply, CommentReply} from "./";
import { useState } from "react";
const Comment = ()=>{
    const [replyOn, setReplyOn] = useState(false);
    const handleReply = ()=>{
        setReplyOn(!replyOn);
    }
   return (
      <div className={styles.comment}>
        <div className={styles.userInfo}>
              <img src={profile}/>
              <p>username: To add a "Copy to Clipboard" button in your code, you can utilize the navigator.clipboard API available in modern browsers</p>
              <div onClick={handleReply} className={styles.replyBtn}>
               <BsReplyAllFill /> Reply
            </div>
        </div>
          {replyOn &&  <CreateCommentReply/>}
         <CommentReply/>
      </div>
   )
}

export default Comment;