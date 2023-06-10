import styles from "../styles/rightBar.module.css";
import profile from "../assets/images/profile.jpg";

const FriendCoder = ()=>{
  return (
    <div className={styles.coderCard}>
    <div className={styles.left}>
        <img src={profile}/>
        <div className={styles.cardHeading}>
            <h4>username</h4>
        </div>
    </div>
    <div className={styles.right}>
        <button>following</button>
    </div>
  </div>
  )
}

export default FriendCoder;