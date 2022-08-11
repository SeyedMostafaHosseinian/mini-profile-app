import React from 'react';
import Navbar from './Navbar';

import styles from "./Home.module.css";

import img from "../assets/mostafa1.jpg"
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className={styles.home}>
            <div className={styles.bodyPageContainer}>
                <div className={styles.header}>
                    <h2>صفحه اصلی</h2>
                    <svg width="26" height="22" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.5 0L0 7.6503H2.31818V14.6048H7.72727V9.96848H9.27273V14.6048H14.6818V7.6503H17L8.5 0ZM8.5 2.07972L13.1364 6.25275V6.87758V13.0594H10.8182V8.42303H6.18182V13.0594H3.86364V6.25275L8.5 2.07972Z" fill="#fff"/>
                    </svg>
                </div>
                <div className={styles.content}>
                    <img src={img} />
                    <span> !سلام </span>
                    <h4>سید مصطفی حسینی هستم</h4>
                    <h5>front-end developer</h5>
                    <p>علاقه مند به حوضه فرانت اند و   تقریبا یکسال است که  مشغول کار و در حال یادگیری مباحث فرانت اند هستم به پروفایل من خوش آمدید برای مشاهده رزومه روی اطلاعات بیشتر کلیک نمایید</p>
                    <div className={styles.buttons}>
                        <Link to='/call'> تماس با من</Link>
                        <Link to='/resumeh'> اطلاعات بیشتر</Link>
                    </div>
                    
                </div>
            </div>
            { <Navbar title="home" />}
        </div>
    );
};

export default Home;