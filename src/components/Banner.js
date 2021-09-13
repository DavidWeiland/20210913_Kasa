import logo from '../assets/logo.png'
import '../styles/Banner.css'

function Banner() {
  return (
    <div className='banner'>
      <img src={logo} alt='Kasa' className='banner-logo' />
      <div>
        <ul className='banner-nav'>
          <li className='banner-nav-elem'>
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