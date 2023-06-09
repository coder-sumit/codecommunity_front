import { useState } from "react";
import styles from "../styles/comment.module.css";
import {Comment} from "./";
const CommentContainer = (props)=>{
   const [showAll, setShowAll] = useState(false);
   const handleShowComments = ()=>{
     setShowAll(!showAll);
   }
   const {post, comments} = props;
  return (
    <div className={styles.comments}>
       {showAll ||  <Comment post={post} comment={comments[0]}/>}
       {showAll &&  <>{comments.map((comment)=> <Comment key={comment.comment_id} post={post} comment={comment} /> )}</>}
      <div className={styles.viewAll}>
           <p onClick={handleShowComments}>
            
            {showAll ||  <>View all Comments</>}
            {showAll &&  <>Show Less</>}
            </p>
      </div>
    </div>
  )
}
export default CommentContainer;