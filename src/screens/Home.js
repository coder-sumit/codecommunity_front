import styles from "../styles/home.module.css";
import { SideBar, Navbar, RightBar, CreatePost, Post} from "../components";


const HomePage = ()=>{
    return (
    <div className={styles.homeMain}>
      
     <div className={styles.rightBar}>
         <div className={styles.navbar}>
           <Navbar/>
         </div>

         <div className={styles.homeArea}>
         <div className={styles.postContainer}>
            <CreatePost/>
            <Post/> 
            
        
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