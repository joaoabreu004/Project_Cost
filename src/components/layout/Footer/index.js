import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import styles from './Footer.css'


function Footer() {
    return (
        <footer className='footer'>
            <ul>
                <li>
                    <FaFacebook />
                </li>
                <li>
                    <FaInstagram />
                </li>
                <li>
                    <FaLinkedin />
                </li>
            </ul>
            <p className='copy_right'><span>Costs</span> &copy; 2022</p>
        </footer>
    )
}
export default Footer;
