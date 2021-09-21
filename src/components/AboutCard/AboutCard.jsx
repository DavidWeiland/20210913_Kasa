import "../../styles/AboutCard.css"
import chevron from '../../assets/images/chevron-down.svg'
import ACDescribe from './ACDescribe'
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
                    <ACDescribe
                        key={`${this.props.title}-${this.props.id}`}
                        title={this.props.title}
                        describe={this.props.describe}
                    />
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

export default AboutCard
