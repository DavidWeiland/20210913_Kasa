import '../../styles/FicheLocation.css'
import DefaultPicture from '../../assets/images/section_1_BG.jpg'
import PropTypes from 'prop-types'
//import { Carousel } from '../Carousel/Carousel'
import AboutCard from '../AboutCard/AboutCard'
import React from 'react'

class FicheLocation extends React.Component {
  render() {

    //console.log({this.props.equipments})
    //const equipementsList = {equipements.map((equipement) => <span>{ equipement }</span>)}
    
  return(
      <div>
          
          <div className="fiche-location-header">
              <h1 className="fiche-location-title">{this.props.title}</h1>
              <div className="fiche-location-host">
                  <span className="fiche-location-host-name">
                      {this.props.host.name}
                  </span>
                  <img
                      src={`${this.props.host.picture}`}
                      alt={`${this.props.host.picture}`}
                      className="fiche-location-host-picture"
                      />
              </div>
          </div>
          <h2 className="fiche-location-subtitle">{this.props.location}</h2>
          <div>
              <div className="fiche-location-tags">
                  {this.props.tags.map((tag, index) => (
                    <span className="fiche-location-tag" key={`tag-${index}`}>
                          {tag}
                      </span>
                  ))}
              </div>
              <span className="fiche-location-rating">{this.props.rating}</span>
          </div>
          <div className="fiche-location-about">
              <AboutCard
                  key={`description-${this.props.id}`}
                  title="Description"
                  describe={this.props.description}
                  />
              <AboutCard
                  key={`equipements-${this.props.id}`}
                  title="Equipements"
                  describe2={this.props.equipments}
                  />
          </div>
      </div>
  )
}
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

/*
travail sur carousel à monter en ligne 13
<div className="fiche-location-carousel">
              {this.props.pictures.map((picture, index) => (
                <Carousel
                key={`${picture}-${index}`}
                picture={picture}
                id={this.props.id}
                />
                ))}
          </div>*/