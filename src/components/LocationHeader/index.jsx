import "../../styles/FicheLocation.css"
import React from "react"
import ScoreScale from "../ScoreScale"

export default class FicheLocation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const { title, tags, host, rating, location } = this.props
        
        return (
            <div className="fiche-location-header">
                <div className="fiche-location-header-left">
                    <h1 className="fiche-location-title">{title}</h1>
                    <h2 className="fiche-location-subtitle">{location}</h2>
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
                            <span>{host.name.split(" ")[0]}</span>
                            <span>{host.name.split(" ")[1]}</span>
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
        )
    }
}
