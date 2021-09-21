import "../../styles/Carousel.css"
import React from 'react'
import chevron from '../../assets/images/chevron-down.svg'

class Carousel extends React.Component {
  
  render() {
    let next, prev
    if (this.props.index === 1) {
        next = `#slide-${this.props.index + 1}`
        prev = `#slide-${this.props.length}`
    } else if (this.props.index === this.props.length) {
        next = `#slide-1`
        prev = `#slide-${this.props.index-1}`
    } else {
        next = `#slide-${this.props.index + 1}`
        prev = `#slide-${this.props.index-1}`
    }
  
      return (
          <div id={`slide-${this.props.index}`}>
              <img
                  className="carousel-image"
                  src={`${this.props.picture}`}
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
                      {this.props.index}/{this.props.length}
                  </p>
              </div>
          </div>
      )
    
    }
}

export default Carousel
