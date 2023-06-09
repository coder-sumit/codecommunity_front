import styles from "../styles/post.module.css";
import profile from "../assets/images/profile.jpg";
import CodeEditor from '@uiw/react-textarea-code-editor';
import {AiOutlineHeart, AiFillHeart} from "react-icons/ai";
import {BiCommentAdd} from "react-icons/bi";
import {FaShareSquare} from "react-icons/fa";
import {VscCopy} from "react-icons/vsc";
import {CreateComment, CommentContainer} from "./";
import { toast } from "react-toastify";
import { IMAGE_ROOT } from "../utils";
import userImg from "../assets/images/user.jpg";
import { useAuth } from "../hooks";
import { useState } from "react";
import { toggleLike } from "../apis";


const Post = (props)=>{
    const {post, setPosts} = props;
    const [isUserLiked, setIsUerLiked] = useState(false);
    const user = useAuth();
    let username = user.user.username;
    // handle like color 
    let likes = post.likes;
    let likeUsernames = likes.map((like)=> like.username);
    if(!isUserLiked && (likeUsernames.indexOf(username) != -1)){
       setIsUerLiked(true);
    }

    const handleShare = () => {
      const postUrl = `codecommunity.in/post/${post.post_id}`; // Replace with the actual post URL
    
      if (navigator.share) {
        navigator
          .share({
            title: "Share Title",
            text: "Content to be shared",
            url: postUrl,
          })
          .then(() => {
            // Sharing succeeded
            toast.success("Post shared successfully!");
          })
          .catch((error) => {
            // Sharing failed
            toast.error("Failed to share the post");
            copyToClipboard(postUrl); // Copy the post URL to clipboard as a fallback
          });
      } else {
        // Fallback behavior
        copyToClipboard(postUrl); // Copy the post URL to clipboard
        toast.info("Sharing is not supported in your browser. The post URL has been copied to the clipboard.");
      }
    };
    
    const copyToClipboard = (text) => {
      const dummyElement = document.createElement("textarea");
      dummyElement.value = text;
      dummyElement.setAttribute("readonly", "");
      dummyElement.style.position = "absolute";
      dummyElement.style.left = "-9999px";
      document.body.appendChild(dummyElement);
      dummyElement.select();
      document.execCommand("copy");
      document.body.removeChild(dummyElement);
    };
    

    const handleToggleLike = async () => {
      let response = await toggleLike('post', post.post_id);
      if (response.success) {
        if (response.liked) {
          setIsUerLiked(true);
          setPosts((prevPosts) => {
            return prevPosts.map((postDoc) => {
              if (postDoc.post_id === post.post_id) {
                return { ...postDoc, likeCount: postDoc.likeCount + 1 };
                
              }
              return postDoc;
            });
          });
        } else {
          setPosts((prevPosts) => {
            return prevPosts.map((postDoc) => {
              if (postDoc.post_id === post.post_id) {
                if (postDoc.likes && postDoc.likes.length) {
                  // Filter out the like with the current username
                  postDoc.likes = postDoc.likes.filter(
                    (likeUser) => likeUser.username !== username
                  );
                }
                return { ...postDoc, likeCount: postDoc.likeCount - 1 };
              }
              return postDoc;
            });
          });
          setIsUerLiked(false);
        }
      } else {
        toast.error("Unexpected Error");
      }
    };
    

    let  code;
    let language;
    if(post.post_code){
      code = post.post_code.split("*!$!*");
      language = code[0];
      code = code[1];
    }
    
    let userProfImg = userImg;
    if(post.avatar){
      userProfImg = `${IMAGE_ROOT}/${post.avatar}`;
    }
    let postImg;
    if(post.post_image){
      postImg = `${IMAGE_ROOT}/${post.post_image}`;
    }

    const handleCopyToClipboard = async () => {
      try {
        await navigator.clipboard.writeText(code);
        toast.info("Code copied to clipboard!");
      } catch (error) {
        toast.error("error while coping");
      }
    };

    return (
       <div className={styles.postBox}>
         <div className={styles.postHeading}>
            <div className={styles.left}>
                  <img src={userProfImg}/>
                  <p>{post.username}</p>
            </div>
            <div className={styles.right}>
                <small>{post.timeBeforeCreated}</small>
            </div>
         </div>

         <div className={styles.postContent}>
            {post.post_caption && <p>{post.post_caption}</p>}

        {code && 
          <div className={styles.editorContainer}>
          <CodeEditor
          value={code}
          language="cpp"
          data-color-mode="dark"
          className={styles.codeEditor}
          disabled
          padding={15}
          placeholder="Write Code Here..."
       />
       <div className={styles.langLabel}>{language}</div>
       <VscCopy className={styles.copyIcon} onClick={handleCopyToClipboard} />
       </div>}

     {postImg &&  <div className={styles.postImage}>
      <img src={postImg} />
      </div>}

      <div className={styles.icons}>
        <div onClick={handleToggleLike}>
    {isUserLiked ? (
      <>
        <AiFillHeart className={`${styles.filledHeart} ${styles.icon}`} />
        <span className={styles.filledHeart}>{post.likeCount}</span>
      </>
    ) : (
      <>
        <AiOutlineHeart className={styles.icon} />
        <span>{post.likeCount}</span>
      </>
    )}
  </div>
        <div><BiCommentAdd className={styles.icon}/> <span>{post.commentCount}</span></div>
        <div onClick={handleShare}><FaShareSquare className={styles.icon}/></div>
      </div>

      <CreateComment post = {post} setPosts={setPosts}/>
      {post.commentCount !==0  && <CommentContainer post = {post} comments = {post.comments} setPosts={setPosts}/>}
         </div>

       </div>
    )

}

export default Post;