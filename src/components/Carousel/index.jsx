import "../../styles/FicheLocation.css"
import React from "react"
import chevron from "../../assets/images/chevron-down.svg"

export default class Carousel extends React.Component {
    constructor(props) {
        super(props)
        this.state = { index: 1 }
        this.next = this.next.bind(this)
        this.prev = this.prev.bind(this)
    }

    next() {
        this.state.index === this.props.pictures.length
            ? this.setState(() => ({ index: 1 }))
            : this.setState((state) => ({ index: state.index + 1 }))
    }

    prev() {
        this.state.index === 1
            ? this.setState(() => ({ index: this.props.pictures.length }))
            : this.setState((state) => ({ index: state.index - 1 }))
    }

    render() {
        const { pictures } = this.props

        return (
            <div className="fiche-location-carousel-container">
                <img
                    className="fiche-location-carousel"
                    src={pictures[this.state.index - 1]}
                    alt=""
                />
                <div className="picture-number">
                    <p>
                        {`${this.state.index}`} /{pictures.length}
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
        )
    }
}