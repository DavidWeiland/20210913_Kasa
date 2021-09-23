import '../../styles/FicheLocation.css'
import AboutCard from '../AboutCard/AboutCard'
import React from 'react'
import CareScale from '../CareScale'
import chevron from "../../assets/images/chevron-down.svg"

class FicheLocation extends React.Component {
    constructor(props) {
        super(props)
        this.state = { index: 1 }
        this.next = this.next.bind(this)
        this.prev = this.prev.bind(this)
    }

    next() {
        (this.state.index === this.props.pictures.length) 
            ? (this.setState(() => ({ index: 1 })))
            : (this.setState((state) => ({ index: state.index +1 })))
    }

    prev() {
        this.state.index === 1
            ? this.setState(() => ({ index: this.props.pictures.length }))
            : this.setState((state) => ({ index: state.index - 1 }))
    }

    render() {
        return (
            <div className="body">
                <div className="fiche-location-carousel-container">
                    <img
                        className="fiche-location-carousel"
                        src={this.props.pictures[this.state.index-1]}
                        alt=""
                    />
                    <div className="picture-number">
                        <p>
                            {`${this.state.index}`} /
                            {this.props.pictures.length}
                        </p>
                    </div>
                    <div className="next" onClick={this.next}>
                        <img
                            className="next-icon"
                            src={chevron}
                            alt="next-icon"
                        />
                    </div>
                    <div className="prev" onClick={this.prev}>
                        <img
                            className="prev-icon"
                            src={chevron}
                            alt="prev-icon"
                        />
                    </div>
                </div>

                <div className="fiche-location-header">
                    <div className="fiche-location-header-left">
                        <h1 className="fiche-location-title">
                            {this.props.title}
                        </h1>
                        <h2 className="fiche-location-subtitle">
                            {this.props.location}
                        </h2>
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
                                <span>
                                    {this.props.host.name.split(" ")[0]}
                                </span>
                                <span>
                                    {this.props.host.name.split(" ")[1]}
                                </span>
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