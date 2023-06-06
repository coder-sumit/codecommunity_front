import styles from "../styles/rightBar.module.css";
import profile from "../assets/images/profile.jpg";
const RightBar = ()=>{
  return (
    <>
    <div className={styles.recommendedCoders}>
        <h3>Recommended Coders</h3>
        <div className={styles.coderContainer}>
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
        </div>
    </div>

    <div className={`${styles.recommendedCoders}`}>
    <h3>Friend Coders</h3>
        <div className={`${styles.coderContainer} ${styles.friendCoders}`}>
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
            
        </div>
    </div>
    </>
  )
}

export default RightBar;