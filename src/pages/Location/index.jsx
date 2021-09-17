import '../../styles/App.css'
import { locationsList } from '../../data/locationsList'
import FicheLocation from '../../components/FicheLocation'
import {useParams} from 'react-router-dom'


function Location() {
  const { idLocation } = useParams()

  return (
    <div className='body'>
      {locationsList.filter((location) => (location.id === idLocation)).map(({ index, id, title, pictures, description, host, rating, location, equipements, tags }) => (
        <FicheLocation
          key={`${id}-${index}`}
                id={id}
                title={title}
                pictures={pictures}
                description={description}
                host={host}
                rating={rating}
                location={location}
                equipements={equipements}
                tags={tags}
        />
      ))}
    </div>
  )
}

export default Location