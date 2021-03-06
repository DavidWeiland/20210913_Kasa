import logo from "../../assets/images/logo.svg";
import "../../styles/Footer.css";
import { Link } from 'react-router-dom'
import React from "react";

export default class Footer extends React.Component {
    render() {
        
        return (
            <div className='footer'>
                <Link to='/'>
                    <img src={logo} alt="logo Kasa" className='footer-logo'/>
                </Link>
                <span className='footer-text'>
                © 2020 Kasa. All rights reserved
                </span>
            </div>
        )
    }
}