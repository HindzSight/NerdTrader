import React from 'react'
import styles from './FooterSection.module.css'
import { FiInfo } from "react-icons/fi";
import { HiOutlineSupport } from "react-icons/hi";
import { RiAdvertisementLine ,RiTwitterXLine,RiFacebookCircleLine ,RiInstagramLine, RiYoutubeLine} from "react-icons/ri";
import { TbBrandBlogger } from "react-icons/tb";
import { MdOutlinePrivacyTip,MdOutlineSecurity ,MdHelpOutline} from "react-icons/md";

function FooterSection() {
    return (
        <div className={styles.footer}>
            <div className={styles.alignMent}><p><FiInfo />About</p> <p><HiOutlineSupport />Support </p><p><RiAdvertisementLine />Advertise</p> <p><TbBrandBlogger />Blog</p> <p>Terms</p> </div>
            <div className={styles.alignMent}><p><MdOutlinePrivacyTip />Privacy</p> <p><MdOutlineSecurity />Security </p><p>Status</p> <p><MdHelpOutline />Help</p></div>
            <div className={styles.alignMent}><RiTwitterXLine />  <RiFacebookCircleLine />  <RiInstagramLine />  <RiYoutubeLine /> <p></p> </div>
            <p className={styles.icon}>© 2024 Nerd Trader, All Rights Reserved.</p>
        </div>
    )
}

export default FooterSection