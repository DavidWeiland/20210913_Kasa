import "../../styles/AboutCard.css"
import React from "react"

class ACDescribe extends React.Component {

    render() {
        return this.props.title === "Equipements" ? (
          <div className="about-item-describe">
              {this.props.describe.map((desc, index) => (
                  <span key={`${desc}-${index}`}>{desc}</span>
              ))}
          </div>
        ) : (
          <span className="about-item-describe">
              {this.props.describe}
          </span>
        )
    }
}


export default ACDescribe
