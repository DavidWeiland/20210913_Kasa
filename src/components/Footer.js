import logo from "../assets/images/logo.svg";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className='footer'>
      <img src={logo} alt="logo Kasa" className='footer-logo'/>
      <span className='footer-text'>
        © 2020 Kasa. All rights reserved</span>
    </div>
  )
}

export default Footer
