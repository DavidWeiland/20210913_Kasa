import '../../styles/FicheLocation.css'
import AboutCard from '../AboutCard'
import React from 'react'
import ScoreScale from '../ScoreScale'
import chevron from "../../assets/images/chevron-down.svg"

export default class FicheLocation extends React.Component {
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
        const { pictures, title, tags, host, rating, id, description, equipments, location } = this.props
        return (
            <div className="body">
                <div className="fiche-location-carousel-container">
                    <img
                        className="fiche-location-carousel"
                        src={pictures[this.state.index-1]}
                        alt=""
                    />
                    <div className="picture-number">
                        <p>
                            {`${this.state.index}`} /
                            {pictures.length}
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
                            {title}
                        </h1>
                        <h2 className="fiche-location-subtitle">
                            {location}
                        </h2>
                        <div className="fiche-location-tag-rating-container">
                            <div className="fiche-location-tag-container">
                                {tags.map((tag, index) => (
                                    <span key={`tag-${index}`}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="fiche-location-header-right">
                        <div className="fiche-location-host">
                            <div className="fiche-location-host-name">
                                <span>
                                    {host.name.split(" ")[0]}
                                </span>
                                <span>
                                    {host.name.split(" ")[1]}
                                </span>
                            </div>
                            <img
                                src={`${host.picture}`}
                                alt={`${host.picture}`}
                                className="fiche-location-host-picture"
                            />
                        </div>
                        <div className="fiche-location-rating-container">
                            <ScoreScale scoreValue={rating} />
                        </div>
                    </div>
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
                        describe={equipments}
                    />
                </div>
            </div>
        )
    }
}