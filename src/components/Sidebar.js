import styles from "../styles/sidebar.module.css";
import logo from "../assets/images/logo.png"
import mlogo from "../assets/images/mlogo.png";
import {FaHome, FaUserCircle} from "react-icons/fa";
import {BsInfoCircleFill} from "react-icons/bs";
import {MdForum} from "react-icons/md";
import {FiSettings} from "react-icons/fi";
const SideBar = ()=>(
    <>
       
        <div className={styles.logoDiv}>
            <img src={mlogo} className={styles.mlogo} />
            <img src={logo} className={styles.logo} />
        </div>
       {/* Sidbar links */}

        <div className={styles.sideLinks}>
            <a className={styles.link} href="#">
                <FaHome /> Home
            </a>
            <a className={styles.link} href="#">
                <MdForum /> Forum
            </a>
            <a className={styles.link} href="#">
                <BsInfoCircleFill /> About Me
            </a>
        </div>

        {/* Trending Posts */}

        <div className={styles.trending}>
            <h2>Trending</h2>
            <div className={styles.trendingScroll}>

            
            <div className={styles.trendingCard}>
                <h3>
                    This is the title of Trending Post
                </h3>
                <div className={styles.trendingBottom}>
                    <span>
                        username
                    </span>
                    <small>
                        2 days ago
                    </small>
                </div>
            </div>
            <div className={styles.trendingCard}>
                <h3>
                    This is the title of Trending Post
                </h3>
                <div className={styles.trendingBottom}>
                    <span>
                        username
                    </span>
                    <small>
                        2 days ago
                    </small>
                </div>
            </div>
            <div className={styles.trendingCard}>
                <h3>
                    This is the title of Trending Post
                </h3>
                <div className={styles.trendingBottom}>
                    <span>
                        username
                    </span>
                    <small>
                        2 days ago
                    </small>
                </div>
            </div>
            
            <div className={styles.trendingCard}>
                <h3>
                    This is the title of Trending Post
                </h3>
                <div className={styles.trendingBottom}>
                    <span>
                        username
                    </span>
                    <small>
                        2 days ago
                    </small>
                </div>
            </div>
            </div>
        </div>

        {/* Setting DIv */}
        <div className={styles.settingDiv}>
       

        <a className={styles.link} href="#">
                <FiSettings /> Settings
        </a>

        <a className={styles.link} href="#">
                <FaUserCircle /> Profile
        </a>
        
        </div>



    </>
)

export default SideBar;