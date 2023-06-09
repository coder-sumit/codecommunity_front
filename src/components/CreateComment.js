import {useState } from "react";
import styles from "../styles/createComment.module.css";
import {FaTelegramPlane} from "react-icons/fa";
import profile from "../assets/images/profile.jpg";
import { makeComment } from "../apis";
import {toast} from "react-toastify";
import userImg from "../assets/images/user.jpg";
import {useAuth} from "../hooks";
import { IMAGE_ROOT } from "../utils";

const CreateComment = (props)=>{
    let profileImage = userImg;
    let user = useAuth().user;
  
    if(user && user.profile_pic){
      profileImage = `${IMAGE_ROOT}/${user.profile_pic}`;
    }
    const [comment, setComment] = useState('');
    const {post} = props;
    const handleComment = (e)=>{
        setComment(e.target.value)
    }
    const handleSubmit = async(e)=>{
        if(!comment){
          toast.error("Comment Can't Be Empty");
          return;
        }
        let response = await makeComment(post.post_id, comment);
        if(response.success){
          setComment("");
          toast.success("Commented on post");
        }else{
          toast.error(response.message);
        }
    }
   return (
     <div className={styles.createComment}>
           <img src={profileImage}/>
           <div className={styles.inputBox}>
           <input type="text" onChange={handleComment} value={comment} placeholder="Write Comment on Post..."/>
           <FaTelegramPlane onClick={handleSubmit} className={styles.icon} />
           </div>
     </div>
   )
}

export default CreateComment;