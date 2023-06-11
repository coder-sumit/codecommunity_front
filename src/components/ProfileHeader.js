import styles from "../styles/profileHeader.module.css";
import userImg from "../assets/images/user.jpg";
import { IMAGE_ROOT } from "../utils";
import { useEffect, useState } from "react";
import { profile, followList, followingList } from "../apis";
import { toast } from "react-toastify";


const ProfileHeader = (props)=>{
    let profileImage = userImg;
    const {user, postCount} = props;
   if(user){
      if(user.profile_pic){
         profileImage = `${IMAGE_ROOT}/${user.profile_pic}`;
      }
   }
   const [followers, setFollowers] = useState([]);
   const [followingUsers, setFollowingUsers] = useState([]);

   useEffect(()=>{
     async function getFollowers(){
        if(user?._id){
        // get user follow list
        let followListData = await followList(user?._id);
        if(followListData.success){
            setFollowers(followListData?.data?.followList);
         }else{
            toast.error(followListData.message);
         } 
         // get following list
         let followingListData = await followingList(user?._id);
         if(followingListData.success){
            setFollowingUsers(followingListData?.data?.followingList);
         }else{
            toast.error(followingListData.message);
         } 
        }
     }
     getFollowers();

   }, []);
    
    
   return (
    <div className={styles.profileHeader}>
        <div className={styles.left}>
            <img src={profileImage} alt={user?.username}/>
            <p>{user?.username}</p>
        </div>
        <div className={styles.right}>
            <div>
                <h3>{postCount}</h3>
                <p>Posts</p>
            </div>
            <div>
                <h3>{followers?.length}</h3>
                <p>Followers</p>
            </div>
            <div>
                <h3>{followingUsers?.length}</h3>
                <p>Following</p>
            </div>
        </div>

    </div>
   )
}

export default ProfileHeader;