import '../../styles/FicheLocation.css'
import DefaultPicture from '../../assets/images/section_1_BG.jpg'
import PropTypes from 'prop-types'
import { Carousel } from '../Carousel/Carousel'
import AboutCard from '../AboutCard/AboutCard'

function FicheLocation({ id, title, pictures, description, host, rating, location, equipements, tags }) {

  return (
      <div>
        <div className="fiche-location-carousel">
          {pictures.map((picture, index) => 
            <Carousel
            key={`${picture}-${index}`}
            picture={picture}
            id={id}
            />)}
        </div>
        <div className="fiche-location-header">
          <h1 className="fiche-location-title">{title}</h1>
          <div className="fiche-location-host">
            <span className="fiche-location-host-name">{host.name}</span>
            <img src={`${host.picture}`} alt={`${host.picture}`} className="fiche-location-host-picture"/>
          </div>
        </div>
        <h2 className="fiche-location-subtitle">{location}</h2>
        <div>
          <div className="fiche-location-tags">
          {tags.map((tag, index) => <span className="fiche-location-tag"
          key={`tag-${index}`}>{tag}</span>)}
          </div>
          <span className="fiche-location-rating">
          {rating}
          </span>
        </div>
        <div className="fiche-location-about">
          <AboutCard
            key={`description-${id}`}
            title="Description"
            describe={description}
          />
          <AboutCard
            key={`equipements-${id}`}
            title="Equipements"
            describe={equipements}
          />
        </div>
      </div>
    )
}

FicheLocation.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

FicheLocation.defaultProps = {
  cover: DefaultPicture,
  title : '',
}

export default FicheLocation
