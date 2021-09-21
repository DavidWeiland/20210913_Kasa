import '../../styles/FicheLocation.css'
import Carousel from '../Carousel/Carousel'
import AboutCard from '../AboutCard/AboutCard'
import React from 'react'
import CareScale from '../CareScale'

class FicheLocation extends React.Component {
  
    render() {
        return (
            <div className="body">
                <div className="fiche-location-carousel-container">
                    <div className="fiche-location-carousel">
                    {this.props.pictures.map((picture, index) => (
                        <Carousel
                            key={`${picture}-${index}`}
                            index={index + 1}
                            picture={picture}
                            length={this.props.pictures.length}
                        />
                    ))}
                    </div>
                </div>
                <div className="fiche-location-header">
                <div className="fiche-location-header-left">
                    <h1 className="fiche-location-title">{this.props.title}</h1>
                    <h2 className="fiche-location-subtitle">
                    {this.props.location}</h2>
                    <div className="fiche-location-tag-rating-container">
                        <div className="fiche-location-tag-container">
                        {this.props.tags.map((tag, index) => (
                            <span key={`tag-${index}`}>{tag}</span>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="fiche-location-header-right">
                    <div className="fiche-location-host">
                        <div className="fiche-location-host-name">
                            <span>{this.props.host.name.split(" ")[0]}</span>
                            <span>{this.props.host.name.split(" ")[1]}</span>
                        </div>
                        <img
                            src={`${this.props.host.picture}`}
                            alt={`${this.props.host.picture}`}
                            className="fiche-location-host-picture"
                            />
                    </div>
                    <div className="fiche-location-rating-container">
                        <CareScale scaleValue={this.props.rating} />
                    </div>
                </div>
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
                        describe={this.props.equipments}
                    />
                </div>
            </div>
        )
    }
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