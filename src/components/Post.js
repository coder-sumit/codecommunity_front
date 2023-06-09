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


const Post = (props)=>{
    const {post} = props;
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
        <div><AiOutlineHeart className={styles.icon}/> <span>{post.likeCount}</span></div>
        <div><BiCommentAdd className={styles.icon}/> <span>{post.commentCount}</span></div>
        <div><FaShareSquare className={styles.icon}/></div>
      </div>

      <CreateComment post = {post}/>
      {post.commentCount !==0  && <CommentContainer post = {post} comments = {post.comments} />}
         </div>

       </div>
    )

}

export default Post;