import { useState, useRef } from "react";
import styles from "../styles/createpost.module.css";
import profile from "../assets/images/profile.jpg";
import {BsImage, BsCodeSlash} from "react-icons/bs";
import CodeEditor from '@uiw/react-textarea-code-editor';
import Compressor from 'compressorjs';
import { post } from "../apis";
import {toast} from "react-toastify";
import userImg from "../assets/images/user.jpg";
import {useAuth} from "../hooks";
import { IMAGE_ROOT } from "../utils";

const CreatePost = ()=>{
    let profileImage = userImg;
    let user = useAuth().user;
  
    if(user && user.profile_pic){
      profileImage = `${IMAGE_ROOT}/${user.profile_pic}`;
    }
   
    const [showEditor, setShowEditor] = useState(false);
    const [language, setLanguage] = useState('js');
    const [selectedImage, setSelectedImage] = useState({ file: null, preview: null });
    const [code, setCode] = useState(null);
    const fileInputRef = useRef(null);
    const [posting , setPosting] = useState(false);
    const [caption, setCaption] = useState("");

    const handlePost = async()=>{
      if(!caption){
        return toast.error("Caption Can't Be Empty...");
      }
       setPosting(true);
       let finalCode = `${language}*!$!*${code}`;
       let data = {};
       if(code){
         data.post_code = finalCode;
       }
       if(caption){
        data.post_caption = caption;
       }
     
      const formData = new FormData();
      formData.append('data', JSON.stringify(data));
      if(selectedImage.file){
        formData.append('img', selectedImage.file);
      }

      let response = await post(formData);
      if(response.success){
           toast.success("Post created successfully...")
      }else{
        toast.error(response.message);
      }
      setCaption("");
      setPosting(false);
      setLanguage('js');
      setSelectedImage({ file: null, preview: null });
      setCode(null);
      setShowEditor(false);
    }

    const handleLanguage = (e)=>{
        setLanguage(e.target.value);
    }
    const handleFileUpload = async(event) => {
        const file = event.target.files[0];
        try {
         new Compressor(file, {
           quality: 0.5, 
           maxWidth: 800, 
           maxHeight: 600, 
           success(result) {
            const previewURL = URL.createObjectURL(result);
            setSelectedImage({ file: result, preview: previewURL });
           },
           error(error) {
             console.error('Image compression error:', error);
           },
         });
       } catch (error) {
         console.error('Image compression error:', error);
       }
     };

   const handleCodeChange = (e)=>{
     setCode(e.target.value);
    
   }




    return (
       <div className={styles.createPost}>
            <div className={styles.profInput}>
                <img src={profileImage}/>
                <input value={caption} onChange={(e)=>{setCaption(e.target.value)}} placeholder="What's on your mind?"/>
            </div>
            <div className={styles.iconDiv}>
               <div className={styles.left}>
                <input
                   type="file"
                   style={{ display: 'none' }}
                   ref={fileInputRef}
                   onChange={handleFileUpload}
                />
                   <BsImage onClick={() => fileInputRef.current.click()} className={styles.icon}/>
                   <BsCodeSlash onClick={()=> {setShowEditor(!showEditor)}} className={styles.icon} />
               </div>
               <button disabled={posting} onClick={handlePost}>
                   {posting?"posting...": "Post"}
               </button>
            </div>

            {selectedImage.preview && (
            <div className={styles.previewImage}>
               <img src={selectedImage.preview} alt="Selected Preview" />
            </div>
         )}



       {showEditor && <div className={styles.inputEditor}>
       <select onChange={handleLanguage} value={language} name="language" className={styles.languages}>
       <option value="js">JavaScript</option>
        <option value="c">C</option>
        <option value="cpp">C++</option>
        <option value="css">CSS</option>
        <option value="go">Go</option>
        <option value="html">HTML</option>
        <option value="java">Java</option>
        <option value="json">JSON</option>
        <option value="kotlin">Kotlin</option>
        <option value="markdown">Markdown</option>
        <option value="objective-c">Objective-C</option>
        <option value="php">PHP</option>
        <option value="python">Python</option>
        <option value="r">R</option>
        <option value="ruby">Ruby</option>
        <option value="rust">Rust</option>
        <option value="typescript">TypeScript</option>
      </select>

        <div className={styles.editorContainer}>
        <CodeEditor
          value={code}
          onChange={handleCodeChange}
          language={language}
          data-color-mode="dark"
          className={styles.codeEditor}
          padding={15}
          placeholder="Write Code Here..."
       />
       </div>
        </div>}




       </div>
    )

}

export default CreatePost;