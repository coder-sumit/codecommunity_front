import { useState } from "react";
import styles from "../styles/comment.module.css";
import {Comment} from "./";
const CommentContainer = (props)=>{
   const [showAll, setShowAll] = useState(false);
   const handleShowComments = ()=>{
     setShowAll(!showAll);
   }
   const {post, comments, setPosts} = props;
  return (
    <div className={styles.comments}>
       {showAll ||  <Comment setPosts={setPosts} post={post} comment={comments[0]}/>}
       {showAll &&  <>{comments.map((comment)=> <Comment key={comment.comment_id} post={post} comment={comment} setPosts={setPosts} /> )}</>}
      <div className={styles.viewAll}>
          {comments.length > 1 &&  <p onClick={handleShowComments}>
            {showAll? 'Show Less': 'View all Comments'}
            </p>}
      </div>
    </div>
  )
}
export default CommentContainer;