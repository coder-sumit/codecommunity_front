import styles from "../styles/comment.module.css";
import { IMAGE_ROOT } from "../utils";
import userImg from "../assets/images/user.jpg";


const CommentReply = (props)=>{
   const {commentReply} = props;
   let userImage = userImg;
   if(commentReply.avatar){
      userImage = `${IMAGE_ROOT}/${commentReply.avatar}`;
   }
   return (
      <div className={styles.comment} style={style}>
        <div className={styles.userInfo}>
              <img src={userImage}/>
              <p><b>{commentReply.username}</b>: {commentReply.text}</p>
        </div>
          
      </div>
   )
}

let style = {
    marginLeft: 20
}

export default CommentReply;