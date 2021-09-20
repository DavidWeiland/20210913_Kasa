import '../../styles/App.css'
import background from '../../assets/images/section_1_BG.jpg'
//import locationsList from '../../data/kasaData.json'
import Card from '../../components/Card'
import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={ locationsList: [] }
  }
  componentDidMount() {
    fetch(
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json"
    )
        .then((response) => response.json())
        .then((data) => this.setState({ locationsList: data.locationsList }))
        .catch((error) => console.log(error))
  }

  render() {
    const {locationsList} = this.state
    return (
        <div className="body">
            <section className="section-1">
                <img
                    src={background}
                    alt="background"
                    className="section-1-BG"
                />
                <h1 className="section-1-title">
                    Chez vous, partout et ailleurs
                </h1>
            </section>
            <section className="gallery">
                {locationsList.map(({ index, id, title, cover }) => (
                    <Card
                        key={`${id}-${index}`}
                        id={id}
                        cover={cover}
                        title={title}
                    />
                ))}
            </section>
        </div>
    )
}
}

export default App