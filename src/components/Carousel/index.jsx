import "../../styles/Carousel.css"
import React from 'react'
import chevron from '../../assets/images/chevron-down.svg'

export default class Carousel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        const {index,length, picture} = this.props
        let next, prev
        if (index === 1) {
            next = `#slide-${index + 1}`
            prev = `#slide-${length}`
        } else if (index === length) {
            next = `#slide-1`
            prev = `#slide-${index - 1}`
        } else {
            next = `#slide-${index + 1}`
            prev = `#slide-${index - 1}`
        }

        return (
            <div id={`slide-${index}`}>
                <img
                    className="carousel-image"
                    src={`${picture}`}
                    alt=""
                />
                <a className="prev" href={prev}>
                    <img className="prev-icon" src={chevron} alt="prev-icon" />
                </a>
                <a className="next" href={next}>
                    <img className="next-icon" src={chevron} alt="next-icon" />
                </a>
                <div className="picture-number">
                    <p>
                        {index}/{length}
                    </p>
                </div>
            </div>
        )
    }
}

