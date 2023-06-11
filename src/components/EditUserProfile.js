import { useState } from "react";
import styles from "../styles/editUserProfile.module.css";
import { updateProfile } from "../apis";
import { toast } from "react-toastify";

const EditUserProfile = (props)=>{
    const {user} = props;
    const [name, setName] = useState(user?.name);
    const [username, setUsername] = useState(user?.username);
    const [mobile, setMobile] = useState(user?.mobile);
    const [gmail, setGmail] = useState(user?.gmail);
    const [insta_id, setInstaID] = useState(user?.insta_id);
    const [gender, setGender] = useState(user?.gender);
    const [github_url, setGithubUrl] = useState(user?.github_url);
    const [code_kldge, setCodeKldge] = useState(user?.code_kldge);
    // get dob in format
    let DOB = user?.dob;
    if(DOB){
        DOB = DOB.split("/");
        DOB = `${DOB[2]}-${DOB[1]}-${DOB[0]}`;
        
    }
    const [dob, setDob] = useState(DOB);

    // handle submit
    const handleFormSubmit = async(e)=>{
        e.preventDefault();
        // convert date in format
        let myDob = dob;
        myDob = myDob?.split("-");
        myDob = `${myDob[2]}/${myDob[1]}/${myDob[0]}`;
        let body = {user, username, name, mobile, gmail, insta_id, gender, code_kldge, dob: myDob};

        console.log(body);

        let response = await updateProfile(body);
        if(response.success){
            toast.success("Profile Updated Successfully");
        }else{
            toast.error(response.message);
        }

        
    }

     return (
   <div className={styles.editUserProfile}>
       <form onSubmit={handleFormSubmit}>
            <input value={name} onChange={(e)=> setName(e.target.value)} type="text" placeholder="Enter Your Name"/>
            <input value={username} type="text" placeholder="Enter Your Username" onChange={(e)=> setUsername(e.target.value)} />
            <input onChange={(e)=> setMobile(e.target.value)}  value={mobile} type="text" placeholder="Enter Your Mobile"/>
            <input onChange={(e)=> setGmail(e.target.value)}  value={gmail} type="email" placeholder="Enter Your Email"/>
            <input onChange={(e)=> setDob(e.target.value)}  value={dob} type="date" />
            <input value={insta_id} onChange={(e)=> setInstaID(e.target.value)}   type="text" placeholder="Enter Your Insta Id"/>
            <select onChange={(e)=> setGender(e.target.value)}  value={gender}>
                <option value="">Select Gender</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
                <option value="O">Other</option>
             </select>
            <input onChange={(e)=> setGithubUrl(e.target.value)}  value={github_url} type="text" placeholder="Enter Your github url"/>
            <input onChange={(e)=> setCodeKldge(e.target.value)}  value={code_kldge} type="text" placeholder="Describe Your Coding Knowledge"/>

            <button type="submit">Edit Details</button>

       </form>
    </div>
     )
}

export default EditUserProfile;