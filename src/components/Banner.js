import logo from '../assets/images/logo.png'
import '../styles/Banner.css'

// ligne 12, className lien-actif à manipuler via Router

function Banner() {
  return (
    <div className='banner'>
      <img src={logo} alt='Kasa' className='banner-logo' />
      <div>
        <ul className='banner-nav'>
          <li className='banner-nav-elem lien-actif'>
            Accueil
          </li>
          <li className='banner-nav-elem'>
            A propos
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Banner