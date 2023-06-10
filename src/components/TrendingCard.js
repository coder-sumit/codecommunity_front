import styles from "../styles/sidebar.module.css";

const TrendingCard = ()=>{
    return (
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
    )

}

export default TrendingCard;