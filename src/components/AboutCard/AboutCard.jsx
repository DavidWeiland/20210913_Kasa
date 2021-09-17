import "../../styles/AboutCard.css"
import chevron from '../../assets/images/chevron-down.svg'
import PropTypes from "prop-types"
import React from "react"

class AboutCard extends React.Component {
    constructor(props){
        super(props)
        this.state = { check: true }
        this.toggle = this.toggle.bind(this)
    }
    toggle(){
        this.setState(({ check })=>({check:!check}))
    }

    render() {
        return this.state.check ? (
            <div className="about-item">
            <div className="about-item-title-container">
                <span className="about-item-title">{this.props.title}</span>
                <img
                    src={chevron}
                    alt=""
                    className="about-item-icon open"
                    onClick={this.toggle}
                    />
            </div>
            <div className="about-item-describe-container">
                <span className="about-item-describe">{this.props.describe}</span>
                <ul className="about-item-describe">{this.props.describe2.map((desc, index)=><li key={`${desc}-${index}`}>{desc}</li>)}</ul>
            </div>
        </div>
    ) : (
        <div className="about-item">
            <div className="about-item-title-container">
                <span className="about-item-title">{this.props.title}</span>
                <img
                    src={chevron}
                    alt=""
                    className="about-item-icon"
                    onClick={this.toggle}
                    />
            </div>
        </div>
    )
}
}

AboutCard.propTypes = {
    title: PropTypes.string.isRequired,
    describe: PropTypes.string,
    describe2:PropTypes.array,
}

AboutCard.defaultProps = {
    title: "",
    describe: "",
    describe2: [],
}

export default AboutCard
