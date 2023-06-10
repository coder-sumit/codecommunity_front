import styles from "../styles/rightBar.module.css";
import profile from "../assets/images/profile.jpg";
import {RecommendedCoder, FriendCoder} from "./";
const RightBar = ()=>{
  return (
    <div className={styles.rightCoderBar}>
    <div className={styles.recommendedCoders}>
        <h3>Recommended Coders</h3>
        <div className={styles.coderContainer}>
            <RecommendedCoder/>
            <RecommendedCoder/>
            <RecommendedCoder/>
            <RecommendedCoder/>
            <RecommendedCoder/>
            <RecommendedCoder/>
        </div>
    </div>

    <div className={`${styles.recommendedCoders}`}>
    <h3>Friend Coders</h3>
        <div className={`${styles.coderContainer} ${styles.friendCoders}`}>
            <FriendCoder/>
            <FriendCoder/>
            <FriendCoder/>
            <FriendCoder/>
            <FriendCoder/>



            
        </div>
    </div>
    </div>
  )
}

export default RightBar;