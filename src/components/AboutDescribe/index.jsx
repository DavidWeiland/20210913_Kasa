import "../../styles/AboutCard.css"
import React from "react"

export default class AboutDescribe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    
    render() {
        const { title, describe } = this.props

        return title === "Equipements" ? (
            <div className="about-item-describe">
                {describe.map((desc, index) => (
                    <span key={`${desc}-${index}`}>{desc}</span>
                ))}
            </div>
        ) : (
            <span className="about-item-describe">
                {describe}
            </span>
        )
    }
}