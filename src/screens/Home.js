import styles from "../styles/home.module.css";
import { RightBar, CreatePost, Post, Loader } from "../components";
import { useAuth } from "../hooks";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { getPosts } from "../apis";
import { toast } from "react-toastify";

const HomePage = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [hasMorePosts, setHasMorePosts] = useState(true);
  const containerRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!auth.user) {
      navigate("/login");
    }
  }, [auth.user, navigate]);

  useEffect(() => {
    async function gettingPosts(page, limit) {
      let response = await getPosts(page, limit);
      if (response.success) {
        setPosts(response.data);
      } else {
        toast.error("Error Occurred!");
      }
      setLoading(false);
    }
    gettingPosts(page, limit);
  }, []);

  const handleScroll =async() => {
    const container = containerRef.current;
    if (container) {
      const { scrollTop, clientHeight, scrollHeight } = container;

      if (hasMorePosts && scrollTop + clientHeight >= scrollHeight) {
                setPage((prevPage) => prevPage + 1);
      }
    }
  };

  useEffect(() => {
    async function fetchMorePosts() {
      try {
        setLoading(true);
        let response = await getPosts(page, limit);
        if (response.success) {
          setPosts((prevPosts) => [...prevPosts, ...response.data]);
          let responseLength = response.data.length;
          if (responseLength < limit) {
            setHasMorePosts(false);
            setLoading(false);
          }
        } else {
          toast.error("Error Occurred!");
        }
      } catch (error) {
        toast.error("Error Occurred!");
      }
      setLoading(false);
    }

    if (page > 1) {
      fetchMorePosts();
    }
  }, [page, limit]);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  useEffect(()=>{}, [posts]);

  return (
    <div className={styles.homeMain}>
      <div className={styles.rightBar}>
        <div className={styles.homeArea}>
          <div className={styles.postContainer} ref={containerRef}>
            <CreatePost setPosts={setPosts} />
            {posts.map((post) => {
              return <Post key={post.post_id} post={post} setPosts={setPosts} />;
            })}

            {loading && <Loader/>}
           
            {!hasMorePosts && <div style={{textAlign: "center", marginTop: 10, color: "#bbbbbb"}}>No more posts</div>}
            {/* Display message when there are no more posts */}
          </div>
          <div className={styles.rightCol}>
            <RightBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
