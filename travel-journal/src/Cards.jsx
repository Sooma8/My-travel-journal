function Cards(props){
    console.log(props)
    return(
        <div className="cards">
            <img src={props.imageUrl} alt="" className="card--image"/>
            <div className="card--stats">
                
                <h3 id="location">
                <img src="src/assets/placeholder.png" alt="location-icon" id="location-icon" />
                    {props.location}
                <a href={props.googleMapsUrl}> View on Google Maps</a>
                </h3>
                
                <h2>{props.title}</h2>
                <p className="travel--date">{props.startDate} - {props.endDate}</p>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default Cards

