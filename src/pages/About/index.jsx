import "../../styles/App.css"
import background from "../../assets/images/gustavo-alves.png"
import AboutCard from "../../components/AboutCard/AboutCard"
import React from "react"

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = { aboutText: [], isLoading: false }
    }

    componentDidMount() {
        this.setState({ isLoading: true })
        fetch("./kasaData.json")
            .then((response) => response.ok ? response.json() : console.error('code: ', response.status))
            .then((data) => this.setState({ aboutText: data.aboutText, isLoading: false }))
            .catch((error) => console.log(error))
    }

    render() {
        const { aboutText, isLoading } = this.state
        if (isLoading) {
            return (
                
                <h1>loading data en cours...</h1>
                
            )
        } else {
            return (
                <div className="body">
                    <section className="section-1">
                        <img
                            src={background}
                            alt="background"
                            className="section-1-BG"
                        />
                        <div className="section-1-title"></div>
                    </section>
                    <section className="gallery-2">
                        {aboutText.map(({ index, title, describe }) => (
                            <AboutCard
                                key={`${title}-${index}`}
                                title={title}
                                describe={describe}
                            />
                        ))}
                    </section>
                </div>
            )
        }
    }
}

export default About
