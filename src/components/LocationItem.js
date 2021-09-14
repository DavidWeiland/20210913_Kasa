import '../styles/LocationItem.css'

function LocationItem({ cover, title }) {
  return (
    <li className='location-item'>
      <img className='location-item-cover' src={cover} alt={`${title} cover`}/>
      <span className='location-item-title'>{title}</span>
    </li>
  )
}
export default LocationItem