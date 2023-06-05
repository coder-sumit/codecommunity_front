import { SideBar, Navbar } from "../components";
import styles from "../styles/home.module.css";

const HomePage = ()=>{
    return (
      <div className={styles.homeMain}>
    <div className={styles.sidebar}>
      <SideBar/>
     </div> 

     <div className={styles.rightBar}>
         <div className={styles.navbar}>
           <Navbar/>
         </div>
     </div>

     </div>
    )
}

export default HomePage;