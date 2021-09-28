import '../../styles/App.css'
import FicheLocation from '../../components/FicheLocation'
import Error from '../Error';
import React from 'react';

export default class LocationPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            locations: [],
            isLoading: false,
        }
    }

    componentDidMount() {
        this.setState({ isLoading: true })
        fetch('./../kasaData.json')
            .then((response) =>
                response.ok
                    ? response.json()
                    : console.error("code: ", response.status)
            )
            .then((data) =>
                this.setState({
                    locations: data.locationsList,
                    isLoading: false,
                })
            )
            .catch((error) => console.log(error))
    }

    render() {
        const { locations, isLoading } = this.state
        const{ match } = this.props
        const { idLocation } = match.params
        const location = locations.filter((location) => location.id === idLocation)
        
        return (location.length<1)  ? (
            <Error />
        ) : (
            (isLoading) ? (
                <h1>
                loading data : {idLocation} en cours...
                </h1>
            ) : (
                <div className="body">
                    {location.map(
                            ({
                                index,
                                id,
                                title,
                                pictures,
                                description,
                                host,
                                rating,
                                location,
                                equipments,
                                tags,
                            }) => (
                                <FicheLocation
                                    key={`${id}-${index}`}
                                    id={id}
                                    title={title}
                                    pictures={pictures}
                                    description={description}
                                    host={host}
                                    rating={rating}
                                    location={location}
                                    equipments={equipments}
                                    tags={tags}
                                />
                            )
                        )}
                </div>
            )
        )
    
    }
}