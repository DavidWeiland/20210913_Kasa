import '../../styles/Card.css'
import DefaultPicture from '../../assets/images/section_1_BG.jpg'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import React from 'react'

class Card extends React.Component {
    render() {
        return (
            <Link to={`/location/${this.props.id}`} className="location-item">
                <img className="location-item-cover" src={this.props.cover} alt={`${this.props.title} cover`} />
                <span className="location-item-title">{this.props.title}</span>
            </Link>
        )
    }
}

Card.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

Card.defaultProps = {
  cover: DefaultPicture,
  title : '',
}

export default Card
