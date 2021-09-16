import "../../styles/AboutCard.css"
import chevron from '../../assets/images/chevron-down.svg'
import PropTypes from "prop-types"
import {useState} from 'react'

function AboutCard({ title, describe }) {
  const [isOpen, setIsOpen] = useState(false)
  
    return isOpen ? (
        <div className="about-item">
            <div className="about-item-title-container">
                <span className="about-item-title">{title}</span>
                <img src={chevron} alt="" className="about-item-icon open" onClick={() => setIsOpen(false)}/>
            </div>
            <div className="about-item-describe-container">
                <span className="about-item-describe">{describe}</span>    
            </div>
        </div>
    ) : (
        <div className="about-item">
            <div className="about-item-title-container">
                <span className="about-item-title">{title}</span>
                <img src={chevron} alt="" className="about-item-icon" onClick={() => setIsOpen(true)}/>
            </div>
        </div>
    )
}

AboutCard.propTypes = {
    title: PropTypes.string.isRequired,
    describe: PropTypes.string.isRequired,
}

AboutCard.defaultProps = {
    title: "",
    describe: "",
}

export default AboutCard
