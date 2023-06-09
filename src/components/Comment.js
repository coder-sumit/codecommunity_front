import styles from "../styles/comment.module.css";
import profile from "../assets/images/profile.jpg";
import {BsReplyAllFill} from "react-icons/bs";
import {CreateCommentReply, CommentReply} from "./";
import { useState } from "react";
import { toast } from "react-toastify";
import { IMAGE_ROOT } from "../utils";
import userImg from "../assets/images/user.jpg";

const Comment = (props)=>{
    const [replyOn, setReplyOn] = useState(false);
    const handleReply = ()=>{
        setReplyOn(!replyOn);
    }
    const {post, comment} = props;
    let userProfImg = userImg;
    console.log(post);
    if(comment.avatar){
      userProfImg = `${IMAGE_ROOT}/${comment.avatar}`;
    }
   return (
      <div className={styles.comment}>
        <div className={styles.userInfo}>
              <img src={userProfImg}/>
              <p><b>{comment.username} </b>: {comment.text}</p>
              <div onClick={handleReply} className={styles.replyBtn}>
               <BsReplyAllFill /> Reply
            </div>
        </div>
          {replyOn &&  <CreateCommentReply post={post} comment={comment}/>}

          {comment.commentReplyCount !==0 && comment.commentReplies.map((commentReply)=> <CommentReply post={post} comment={comment} commentReply = {commentReply}/>) }
         
      </div>
   )
}

export default Comment;