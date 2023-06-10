import styles from "../styles/rightBar.module.css";
import profile from "../assets/images/profile.jpg";

const RecommendedCoder = ()=>{
   return (
    <div className={styles.coderCard}>
                <div className={styles.left}>
                    <img src={profile}/>
                    <div className={styles.cardHeading}>
                        <h4>username</h4>
                        <p>C++, Python, Node Js...</p>
                    </div>
                </div>
                <div className={styles.right}>
                    <button>follow</button>
                </div>
    </div>
   )
}

export default RecommendedCoder;