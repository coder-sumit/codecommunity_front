import styles from "../styles/profile.module.css";
import { ProfileHeader, EditUserProfile, Loader , Post} from "../components";
import {BsShareFill} from "react-icons/bs";
import {AiFillEdit} from "react-icons/ai";
import {BiLogOut} from "react-icons/bi";
import { useEffect, useState } from "react";
import { useAuth } from "../hooks";
import { useParams, useNavigate } from "react-router-dom";
import { profile, getUserPosts , toggleFollow} from "../apis";
import { toast } from "react-toastify";




const Profile = ()=>{
   const navigate = useNavigate();
   const auth = useAuth();
   let user = auth.user;
   let logout = auth.logout;
   const [showEdit, setShowEdit] = useState(false);
   const [profileUser, setProfileUser] = useState(null);
   const [loading , setLoading] = useState(true);
   const [posts, setPosts] = useState([]);
   
   const {id} = useParams();

  // get profile users info
   useEffect(()=>{
    setLoading(true);
     async function getUser(){
       let response = await profile(id);
       if(response.success){
         response.data = {...response.data.user, blocked: response.data.blocked, following: response.data.following};
         setProfileUser(response.data);
         
       }else{
        toast.error(response.message);
       }

       setLoading(false);
       

       

     }
     getUser()
   }, [id]);

   // get  Profile User's Post
   useEffect(()=>{
     setLoading(true);
     async function fetchUserPosts(){
       if(profileUser?._id){
         let response = await getUserPosts(profileUser._id);
         if(response.success){
            setPosts(response.data);
         }else{
           toast.error(response.message);
         }
       }
       setLoading(false);
     }
     fetchUserPosts();

   }, [profileUser]);

   
   // handle logout 
   const handleLogOut = ()=>{
      navigate("/login");
      logout();

   }

  

  //  toggle follow
  const handleToggleFollow = async()=>{
        if(profileUser?._id){
          let response = await toggleFollow(profileUser?._id);
         if(response.success){
          setProfileUser((prevUser)=> ({
            ...prevUser,
            following: response.following
          }));
          }else{
          toast.error(response.message);
          }
        }
  }


   return (

    <div className={styles.profileContainer}>
      {loading? <Loader/> :<> <ProfileHeader postCount={posts.length}  user={profileUser}/>
        {/* Prof Nav and follow button */}
        {(user?.username === profileUser?.username)?<>
          <div className={styles.profNav}>
          <div onClick={()=> setShowEdit((prev)=> !prev)}><AiFillEdit/></div>
          <div> <BsShareFill/></div>
          <div onClick={handleLogOut} className={styles.logout}><BiLogOut/></div>
          
        </div>
        </>: <>
        {profileUser?.following?<button onClick={handleToggleFollow} className={styles.unFollowBtn}>Unfollow</button>: 
        <button onClick={handleToggleFollow} className={styles.followBtn}>Follow</button>}
        
        
        </>}
        

        {showEdit? <EditUserProfile user={user}/>
        : 
        <div className={styles.profUserInfo}>
             {/* public info here */}
             {profileUser?.name && <p><b>Name:</b> {profileUser.name}</p>}
             {profileUser?.code_kldge && <p><b>Coding Knowledge:</b> {profileUser?.code_kldge}</p>}
             {/* <p><b>Age:</b> 21</p> */}
             {profileUser?.github_url && <p><b>Github URL:</b> {profileUser?.github_url}</p>}
             {profileUser?.insta_id && <p><b>Instagram Id:</b> {profileUser?.insta_id}</p>}
             {/* Private user info */}
             {user?.username === profileUser?.username && <>
              {profileUser.gmail && <p><b>Gmail:</b> {profileUser.gmail}</p>}
              {profileUser.dob && <p><b>DOB:</b> {profileUser.dob}</p>}
              {profileUser.mobile && <p><b>Mobile:</b> {profileUser.mobile}</p>}
             </>}
        </div>}

        {/* post section of user */}
        <h2 style={{textAlign: "center", marginTop: 20}}>Posts</h2>
        <div className={styles.profPostContainer}>
        {posts.map((post) => {
              return <Post key={post.post_id} post={post} setPosts={setPosts} />;
        })}
        </div>
        </>
        }
    </div>
   )
}

export default Profile;