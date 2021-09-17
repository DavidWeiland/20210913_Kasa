import '../../styles/App.css'
import background from '../../assets/images/section_1_BG.jpg'
import { locationsList } from '../../data/locationsList'
import Card from '../../components/Card'


function App() {
  document.title = `Kasa`

  return (
      <div className='body'>
        <section className='section-1'>
          <img src={background} alt='background' className='section-1-BG' />
          <h1 className='section-1-title'>Chez vous, partout et ailleurs</h1>
        </section>
        <section className='gallery'>
        {locationsList.map(({ index, id, title, cover}) => (
              <Card
                key={`${id}-${index}`}
                id={id}
                cover={cover}
                title={title}
              />
            ))}
        </section>
      </div>
  )
}

export default App