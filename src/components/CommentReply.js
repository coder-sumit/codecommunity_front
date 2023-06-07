import styles from "../styles/comment.module.css";
import profile from "../assets/images/profile.jpg";

const CommentReply = ()=>{

   return (
      <div className={styles.comment} style={style}>
        <div className={styles.userInfo}>
              <img src={profile}/>
              <p>username: To add a "Copy to Clipboard" button in your code, you can utilize the navigator.clipboard API available in modern browsers</p>
        </div>
          
      </div>
   )
}

let style = {
    marginLeft: 20
}

export default CommentReply;