import styles from "../styles/home.module.css";
import { RightBar, CreatePost, Post} from "../components";
import { useAuth } from "../hooks";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPosts } from "../apis";
import { toast } from "react-toastify";


const HomePage = ()=>{
    const navigate = useNavigate();
    const auth = useAuth();
    useEffect(() => {
      if (!auth.user) {
      navigate("/login");
    }
  }, [auth.user, navigate]);

   const [posts, setPosts] = useState([]);
   const [page, setPage] = useState(1);
   const [limit, setLimit] = useState(5);

   useEffect(()=>{
      async function gettingPosts(page, limit){
        let response = await getPosts(page, limit);
        if(response.success){
          setPosts(response.data);
        }else{
          toast.error("Error Occured!");
        }
      }
      gettingPosts(page, limit);
   }, [page, limit]);

   useEffect(() => {
  }, [posts]);

    return (
    <div className={styles.homeMain}>
      
     <div className={styles.rightBar}>

         <div className={styles.homeArea}>
         <div className={styles.postContainer}>
            <CreatePost setPosts={setPosts}/>
            {posts.map((post)=>{
               return <Post key={post.post_id} post={post} setPosts={setPosts}/> 
            })}
            
            
        
         </div>
         <div className={styles.rightCol}>
             <RightBar/>
         </div>
     </div>
     </div>
     </div>
    )
}

export default HomePage;