import '../../styles/FicheLocation.css'
import Star from "../../assets/images/star.svg"
import StarNot from "../../assets/images/star-unselected.svg"
import React from 'react'

export default class ScoreScale extends React.Component{
    constructor(props) {
        super(props)
        this.state={}
    }
    
    render() {
        const { scoreValue }= this.props
        const range = [1, 2, 3, 4, 5]
        
        return (
            <div>
                {range.map((rangeElem) => scoreValue >= rangeElem ? (
                        <span key={rangeElem.toString()}>
                            <img
                                className="fiche-location-rating-star"
                                src={Star}
                                alt="star-icon"
                            />
                        </span>
                    ) : (
                        <span key={rangeElem.toString()}>
                            <img
                                className="fiche-location-rating-star"
                                src={StarNot}
                                alt="starUnselected-icon"
                            />
                        </span>
                    )
                )}
            </div>
        )
    }
}