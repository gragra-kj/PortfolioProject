import React from 'react'
import styles from './Contact.module.css'
import {getImageUrl} from '../../utils'

const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}><img src={getImageUrl("contact/emailIcon.png")} alt="" /> <a href="mailto:muthuigrace64@gmail.com">muthuigrace64@gmail.com</a></li>
            <li className={styles.link}><img src={getImageUrl("contact/linkedinIcon.png")} alt="" /> <a href="www.linkedin.com/in/grace-muthui-b33730230">Grace Muthui</a></li>
            <li className={styles.link}> <img src={getImageUrl("contact/githubIcon.png")} alt="" /> <a href="https://github.com/gragra-kj">github.com/gragra-kj</a></li>
        </ul>
    </footer>
  )
}

export default Contact