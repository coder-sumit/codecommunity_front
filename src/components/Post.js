import styles from "../styles/post.module.css";
import profile from "../assets/images/profile.jpg";
import CodeEditor from '@uiw/react-textarea-code-editor';
import {AiOutlineHeart, AiFillHeart} from "react-icons/ai";
import {BiCommentAdd} from "react-icons/bi";
import {FaShareSquare} from "react-icons/fa";
import {VscCopy} from "react-icons/vsc";
import {CreateComment, CommentContainer} from "./";

const Post = ()=>{
    const code = `#include <iostream>

    int main() {
        double principal, rate, time, simpleInterest;
    
        // Input principal amount, rate, and time
        std::cout << "Enter the principal amount: ";
        std::cin >> principal;
    
        std::cout << "Enter the interest rate (in percentage): ";
        std::cin >> rate;
    
        std::cout << "Enter the time period (in years): ";
        std::cin >> time;
    
        // Calculate simple interest
        simpleInterest = (principal * rate * time) / 100;
    
        // Print the result
        std::cout << "The simple interest is: " << simpleInterest << std::endl;
    
        return 0;
    }
    `;

    const handleCopyToClipboard = async () => {
      try {
        await navigator.clipboard.writeText(code);
        alert("Code copied to clipboard!");
      } catch (error) {
        console.error("Failed to copy code to clipboard:", error);
      }
    };

    return (
       <div className={styles.postBox}>
         <div className={styles.postHeading}>
            <div className={styles.left}>
                  <img src={profile}/>
                  <p>username</p>
            </div>
            <div className={styles.right}>
                <small>3 days ago</small>
            </div>
         </div>

         <div className={styles.postContent}>
            <p>
            Thank you for applying to the position of NodeJS developer.
            As you can appreciate the large number of applications received, its not possible to go through each one of them in short time.
            So we would like to invite the candidates who match below three criteria
            1) Have done past internships in NodeJS 
            2) Have experience of production API
            </p>

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
       <div className={styles.langLabel}>c++</div>
       <VscCopy className={styles.copyIcon} onClick={handleCopyToClipboard} />
       </div>

      <div className={styles.postImage}>
      <img src={profile} />
      </div>

      <div className={styles.icons}>
        <div><AiOutlineHeart className={styles.icon}/> <span>441</span></div>
        <div><BiCommentAdd className={styles.icon}/> <span>23</span></div>
        <div><FaShareSquare className={styles.icon}/></div>
      </div>

      <CreateComment/>
      <CommentContainer/>
         </div>

       </div>
    )

}

export default Post;