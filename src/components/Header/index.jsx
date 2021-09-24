import logo from '../../assets/images/logo.png'
import '../../styles/Header.css'
import {Link} from 'react-router-dom'
import React from 'react'

export default class Header extends React.Component {
    render(){
        return (
            <div className="banner">
                <Link to="/">
                    <img src={logo} alt="Kasa" className="banner-logo" />
                </Link>
                <nav className="banner-nav">
                    <Link to="/" className="banner-nav-elem">
                        Accueil
                    </Link>
                    <Link to="/about" className="banner-nav-elem">
                        A propos
                    </Link>
                </nav>
            </div>
        )
    }
}
