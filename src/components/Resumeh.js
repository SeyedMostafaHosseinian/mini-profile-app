import React from 'react';
import Navbar from './Navbar';

//styles
import styles from "./Resumeh.module.css";


const Resumeh = () => {
    return (
        <div className={styles.resumeh}>
          <div className={styles.bodyPageContainer}>
            <div className={styles.header}>
                    <h2> رزومه من</h2>
                    <svg width="17" height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M15.2788 0H1.72123C0.771685 0 0 0.771684 0 1.72123V18.463C0 19.4126 0.771685 20.1843 1.72123 20.1843H15.2788C16.2283 20.1843 17 19.4126 17 18.463V1.72123C17 0.771684 16.2283 0 15.2788 0ZM15.8525 18.463C15.8525 18.7786 15.5943 19.0368 15.2788 19.0368H1.72123C1.40567 19.0368 1.14749 18.7786 1.14749 18.463V1.72123C1.14749 1.40567 1.40567 1.14749 1.72123 1.14749H15.2788C15.5943 1.14749 15.8525 1.40567 15.8525 1.72123V18.463Z" fill="white"/>
                     <path d="M8.48553 5.85508C9.3318 5.86082 10.0146 5.16372 10.0088 4.30024C10.0146 3.44536 9.3318 2.74826 8.48553 2.74539C7.63926 2.74826 6.95651 3.44536 6.96224 4.30024C6.95651 5.16372 7.63926 5.86082 8.48553 5.85508ZM13.4197 11.1106H3.55995C3.24439 11.1106 2.98621 11.3687 2.98621 11.6843C2.98621 11.9999 3.24439 12.258 3.55995 12.258H13.4197C13.7353 12.258 13.9935 11.9999 13.9935 11.6843C13.9935 11.3687 13.7381 11.1106 13.4197 11.1106ZM13.4197 13.5432H3.55995C3.24439 13.5432 2.98621 13.8014 2.98621 14.117C2.98621 14.4325 3.24439 14.6907 3.55995 14.6907H13.4197C13.7353 14.6907 13.9935 14.4325 13.9935 14.117C13.9935 13.8014 13.7381 13.5432 13.4197 13.5432ZM13.4197 15.9501H3.55995C3.24439 15.9501 2.98621 16.2083 2.98621 16.5238C2.98621 16.8394 3.24439 17.0976 3.55995 17.0976H13.4197C13.7353 17.0976 13.9935 16.8394 13.9935 16.5238C13.9935 16.2083 13.7381 15.9501 13.4197 15.9501Z" fill="white"/>
                     <path d="M5.85215 9.16545C6.16484 9.21421 6.46032 9.01053 6.50908 8.70932C6.50908 8.70358 6.59228 8.25319 6.88489 7.80567C7.26069 7.23193 7.78566 6.95367 8.48563 6.95367C9.19133 6.95367 9.71344 7.22333 10.0864 7.78273C10.3876 8.23598 10.465 8.71219 10.465 8.71219C10.5052 8.98758 10.7519 9.18553 11.033 9.18553C11.0589 9.18553 11.0876 9.18266 11.1134 9.17979C11.4261 9.13676 11.6441 8.85849 11.6011 8.55728C11.5896 8.48843 11.4892 7.86592 11.0789 7.22906C10.4995 6.32829 9.60156 5.85208 8.48563 5.85208C7.38978 5.85208 6.50048 6.32542 5.91526 7.21759C5.4993 7.84871 5.38742 8.46261 5.37594 8.53146C5.32431 8.83554 5.53946 9.11668 5.85215 9.16545Z" fill="white"/>
                    </svg>
                </div>    
            
          <div className={styles.content}>
            <div className={styles.row1}>
              <div className={styles.row1Column1}>
                <h4>Seyed Mostafa Hosseini</h4>
                <h6>Front-End Developer</h6>

              </div>
              <div className={styles.row1Column2}>
                <span>Mashhad .. Iran</span>
                <span>+98 938 074 9885</span>
                <a href='#' target="_blank">hossenianm21@gmail.com</a>
                <span>Skype:live:.cid.a9be7c41ede3a0cc</span>
              </div>
            </div>
            <div className={styles.row2}>
              <h2>Objective</h2>
              <span>to obtain a job working as a Front-End(React.js) Developer </span>
            </div>
            <div className={styles.row3}>
              <h2>Skills</h2>
              <ul>
                <li>html , css</li>
                <li>JavaScript</li>
                <li>React.JS(Hooks)</li>
                <li>REST api</li>
                <li>Git</li>
                {/* <li>Redux</li> */}
                {/* <li>Material UI</li> */}
                {/* <li>Graph QL</li> */}
              </ul>
            </div>
            <div className={styles.row4}>
              <h2>Projects</h2>
              <ul>
                <li> 
                  Todo App - 
                  <a target="_blank" href='https://todoapp-mostafa.netlify.app/'>https://todoapp-mostafa.netlify.app/</a></li>
                <li> profile App - <a target="_blank" href='https://mini-profile-app.netlify.app/'>https://mini-profile-app.netlify.app/</a></li>
              </ul>
            </div>
            <div className={styles.row2}>
              <h2>Education</h2>
            </div>
          </div> 
          </div> 
          {<Navbar title={"resumeh"}/>}
        </div>
    );
};

export default Resumeh;