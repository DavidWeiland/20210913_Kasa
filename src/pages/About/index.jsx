import "../../styles/App.css"
import background from "../../assets/images/gustavo-alves.png"
import { aboutText } from "../../data/aboutText"
import AboutCard from "../../components/AboutCard/AboutCard"

function About() {
    document.title = `Kasa`

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
                {aboutText.map(({ id, title, describe }) => (
                  <AboutCard
                    key={id}
                    title={title}
                    describe={describe}
                  />
                ))}
            </section>
        </div>
    )
}

export default About
