import '../../styles/Card.css'
import DefaultPicture from '../../assets/images/section_1_BG.jpg'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import React from 'react'

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state={}
  }
  render() {
    const { id, cover, title } = this.props
        return (
            <Link to={`/location/${id}`} className="location-item">
                <img className="location-item-cover" src={cover} alt={`${title} cover`} />
                <span className="location-item-title">{title}</span>
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