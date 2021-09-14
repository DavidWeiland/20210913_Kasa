import '../styles/Body.css'
import background from '../assets/images/section_1_BG.jpg'
import { locationsList } from '../data/locationsList'
import LocationItem from './LocationItem'
//L12 map
function Body() {
  return (
    <div className='body'>
      <section className='section-1'>
        <img src={background} alt='background' className='section-1-BG' />
        <h1 className='section-1-title'>Chez vous, partout et ailleurs</h1>
      </section>
      <section className='gallery'>
        <ul className='gallery-list'>
          {locationsList.map(({ id, title, cover }) => (
              <div key={id}>
                <LocationItem
                  cover={cover}
                  title={title}
                />
              </div>
          ))}
        </ul>
      </section>
  </div>
)
}

export default Body