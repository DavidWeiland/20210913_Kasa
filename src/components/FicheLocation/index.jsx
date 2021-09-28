import '../../styles/FicheLocation.css'
import AboutCard from '../AboutCard'
import React from 'react'
import Carousel from '../Carousel'
import LocationHeader from '../LocationHeader'

export default class FicheLocation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const { pictures, title, tags, host, rating, description, equipments, location } = this.props

        return (
            <div className="body">
                <Carousel
                    pictures={pictures}
                />
                <LocationHeader
                    title={title}
                    tags={tags}
                    host={host}
                    rating={rating}
                    location={location}
                />
                <div className="fiche-location-about">
                    <AboutCard
                        title="Description"
                        describe={description}
                    />
                    <AboutCard
                        title="Equipements"
                        describe={equipments}
                    />
                </div>
            </div>
        )
    }
}