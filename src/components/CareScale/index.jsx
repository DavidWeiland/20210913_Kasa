import '../../styles/FicheLocation.css'
import Star from "../../assets/images/star.svg"
import StarNot from "../../assets/images/star-unselected.svg"
import React from 'react'

class CareScale extends React.Component{

    render(){
        const range = [1, 2, 3, 4, 5]
        
        return (
            <div>
                {range.map((rangeElem) => this.props.scaleValue >= rangeElem ? (
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
                ))}
            </div>
        )
    }
}

export default CareScale
