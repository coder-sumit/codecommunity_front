import {useState } from "react";
import styles from "../styles/createComment.module.css";
import {FaTelegramPlane} from "react-icons/fa";
import { makeCommentReply , getCommentReplyById} from "../apis";
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
    const {post, comment, setPosts} = props;
    const handleSubmit = async()=>{
        if(!commentR){
          toast.error("reply to comment can't be empty");
          return;
        }
        let response = await makeCommentReply(post.post_id, comment.comment_id, commentR);

        if(response.success){
          let comment_reply = await getCommentReplyById(response.data._id);
          comment_reply = comment_reply.data;

          setPosts((prevPosts) => {
            return prevPosts.map((postDoc) => {
              if (postDoc && postDoc.post_id && postDoc.post_id === post.post_id) {
                let postComments = postDoc.comments;
                let postCommentsIds = postComments.map((commentDoc) => commentDoc.comment_id);
                let commentIndex = postCommentsIds.indexOf(comment.comment_id);
          
                if (commentIndex !== -1) {
                  postDoc.comments[commentIndex].commentReplies.unshift(comment_reply);
                  postDoc.comments[commentIndex].commentReplyCount += 1;
                }
          
                return postDoc;
              }
          
              return postDoc;
            });
          });
          
          
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