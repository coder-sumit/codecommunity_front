import styles from "../styles/aboutme.module.css";
import devImg from "../assets/images/developer.jpeg";
import resumeFile from "../assets/pdfs/sumit_resume.pdf";
const AboutMe = ()=>{
    const handleDownload = () => {
        window.open(resumeFile, '_blank');
    };
   return (
    <div className={styles.aboutMeContainer}>
      <div className={styles.aboutHead}>
      <img src={devImg}>
      </img>
      <h1>Sumit Baghel</h1>
      <p>Software Development Engineer</p>
      </div>
      <div className={styles.skillDiv}>
        <h3>SKILLS</h3>
        <div>
        <p>C++</p>
        <p>DSA</p>
        <p>Node JS</p>
        <p>React JS</p>
        <p>Express JS</p>
        <p>MySql</p>
        <p>MongoDB</p>
        <p>Git/Github</p>
        <p>HTML/CSS</p>
        <p>Javascript</p>
        <p>Linux</p>
        <p>AWS EC2</p>
        </div>

      </div>
      <div className={styles.purpose}>
      <p>
     CodeCommunity is a demonstration of my coding skills and abilities to potential employers. By successfully building a complex application like CodeCommunity, I aimed to showcase my proficiency in the MERN stack (MongoDB, Express.js, React, and Node.js) and highlight my expertise in front-end and back-end development, database management, and overall application architecture.
      </p>

      <p>
      Secondly, the development of CodeCommunity provided me with an opportunity to create a platform where coders could connect, collaborate, and share their knowledge. The application aimed to foster a supportive community for coders to interact, discuss coding techniques, exchange insights, and stay updated with industry trends. 
      </p>
      </div>
      <div className={styles.experience}>
          <h2>Experience</h2>
           <div className={styles.expCard}>
              <div className={styles.expHead}>
              <h3>Node Js Intern | FIducia Labs | Remote</h3>
              <p>09/2022 - 02/2023</p>
              </div>
              {/* <p> */}
                <ul style={{marginLeft: 10}}>
                    <li>Developed and maintained RESTful web services for the
                      MySaralApp project at Saral using Node.js and Express.js.</li>
                    <li> Wrote the entire backend of the spare parts website
                       project for Blue Star Company using Node.js and Express.js.</li>
                    <li>Implemented authentication and authorization
                       mechanisms using JWT and Passport.js.</li>
                </ul>
              {/* </p> */}

           </div>
           <div className={styles.expCard}>
              <div className={styles.expHead}>
              <h3>TA | Coding Ninjas | Remote</h3>
              <p>08/2022 - 12/2022</p>
              </div>
              {/* <p> */}
                <ul style={{marginLeft: 10}}>
                    <li>aking doubt sessions</li>
                    <li> Debugging codes</li>
                    <li>Helping students in their assignments & various projects</li>
                </ul>
              
             
              
              {/* </p> */}

           </div>
           <div className={styles.expCard}>
              <div className={styles.expHead}>
              <h3>Web Developer | Biganation 7 Infotech | Remote</h3>
              <p>11/2020 - 01/2021</p>
              </div>
              <p>
                Developed Website Front End from photoshop to html/css.
                Created some websites using wordpress and php.
              </p>

           </div>
      </div>

      <div className={styles.experience}>
          <h2>Education</h2>
           <div className={styles.expCard}>
              <div className={styles.expHead}>
              <h3>B TECH | CSE | 7.79 CGPA</h3>
              <p>2019 - 2023</p>
              </div>
              <p>Oriental University Indore</p>

           </div>
           <div className={styles.expCard}>
              <div className={styles.expHead} style={{marginBottom: 0}}>
              <h3>XII | MPBSE | 82.8% | PCB</h3>
              <p>2017-2018</p>
              </div>          

           </div>
           <div className={styles.expCard}>
              <div className={styles.expHead} style={{marginBottom: 0}}>
              <h3>X | MPBSE | 85.17%</h3>
              <p>2015 - 2016</p>
              </div>

           </div>
      </div>

      <div className={styles.contactInfo}>
        <h2>Contact Information</h2>
        <div>
        <p><b>Gmail:</b> baghelsumit079@gmail.com</p>
        <p><b>Mobile:</b> 9584092556</p>
        <p><b>Resume:</b> <button onClick={handleDownload}>Download Resume</button></p>
        </div>

      </div>

      <div className={styles.contactInfo}>
        <h2>functionality Working On</h2>
        <div>
        <p>Since the project is currently in the development phase, certain functionalities may not be fully operational at this time due to its large scale. These features are actively being worked on and will be implemented in subsequent updates. Here is list of functionalities which will not work- </p>
        <p>- Search Functionality</p>
        <p>- Delete Post</p>
        <p>- Delete Comment</p>
        <p>- Delete Comment Reply</p>
        <p>- Edit Post</p>
        <p>- Edit Comment</p>
        <p>- Edit Comment Reply</p>
        <p>- Trending Post at Home Screen</p>
        <p>- Recommended Coders at Home Screen</p>
        <p>- Chatting System</p>
        <p>- Forum</p>
        <p>- Forget Password</p>
        <p>- Login With Google</p>
        <p>- Login With Github</p>
        <p>- Notifications</p>
        <p>- Delete My Account</p>


        </div>

      </div>
    </div>
   )
}

export default AboutMe;