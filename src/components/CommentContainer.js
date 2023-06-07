import { useState } from "react";
import styles from "../styles/comment.module.css";
import {Comment} from "./";
const CommentContainer = ()=>{
   const [showAll, setShowAll] = useState(false);
   const handleShowComments = ()=>{
     setShowAll(!showAll);
   }
  return (
    <div className={styles.comments}>
       {showAll ||  <Comment/>}
       {showAll &&  <><Comment/><Comment/><Comment/></>}
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