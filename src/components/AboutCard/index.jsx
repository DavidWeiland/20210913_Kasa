import "../../styles/AboutCard.css"
import chevron from '../../assets/images/chevron-down.svg'
import AboutDescribe from '../AboutDescribe'
import React from "react"

export default class AboutCard extends React.Component {
    constructor(props){
        super(props)
        this.state = { open: true }
        this.divOpeningToggle = this.divOpeningToggle.bind(this)
    }

    divOpeningToggle(){
        this.setState(({ open })=>({open:!open}))
    }

    render() {
        const { title, id, describe } = this.props
        
        return this.state.open ? (
            <div className="about-item">
                <div className="about-item-title-container">
                    <span className="about-item-title">{title}</span>
                    <img
                        src={chevron}
                        alt=""
                        className="about-item-icon open"
                        onClick={this.divOpeningToggle}
                    />
                </div>
                <div className="about-item-describe-container">
                    <AboutDescribe
                        key={`${title}-${id}`}
                        title={title}
                        describe={describe}
                    />
                </div>
            </div>
        ) : (
            <div className="about-item">
                <div className="about-item-title-container">
                    <span className="about-item-title">{title}</span>
                    <img
                        src={chevron}
                        alt=""
                        className="about-item-icon"
                        onClick={this.divOpeningToggle}
                    />
                </div>
            </div>
        )
    }
}