import {useState } from "react";
import styles from "../styles/createComment.module.css";
import {FaTelegramPlane} from "react-icons/fa";
import { makeCommentReply } from "../apis";
import { toast } from "react-toastify";
import userImg from "../assets/images/user.jpg";
import {useAuth} from "../hooks";
import { IMAGE_ROOT } from "../utils";

const CreateCommentReply = (props)=>{
  let profileImage = userImg;
  let user = useAuth().user;
  if(user){
     if(user.profile_pic){
        profileImage = `${IMAGE_ROOT}/${user.profile_pic}`;
     }
  }
    const [commentR, setCommentR] = useState('');
    
    const handleCommentReply = (e)=>{
        setCommentR(e.target.value)
    }
    const {post, comment} = props;
    console.log(post, comment);
    const handleSubmit = async()=>{
        if(!commentR){
          toast.error("reply to comment can't be empty");
          return;
        }
        let response = await makeCommentReply(post.post_id, comment.comment_id, commentR);
        if(response.success){
          toast.success("replied to commemnt");
          setCommentR('');
        }else{
          toast.error(response.message);
        }
    }
   return (
     <div className={styles.createComment}>
           <img src={profileImage}/>
           <div className={styles.inputBox}>
           <input type="text" onChange={handleCommentReply} value={commentR} placeholder="Make reply on Comment..."/>
           <FaTelegramPlane onClick={handleSubmit} className={styles.icon} />
           </div>
     </div>
   )
}

export default CreateCommentReply;