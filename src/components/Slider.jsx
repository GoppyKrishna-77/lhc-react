function Slider(props) {
    return <>
        <div className="single-slider" style={{"background-image": `url(${props.bgImg})`}}>
            <div className="container">
                <div className="row align-items-end">
                    <div className="col"></div>
                    <div className="col-lg-7">
                        <div className="text">
                            <h1>
                                <span>{props.highlightQuote}</span> <br />Where Compassion Meets Convenience
                            </h1>
                            <p>
                                Schedule Your Appointment for our Exceptional Healthcare
                            </p>
                            <div className="button">
                                <a href="#appointment" className="btn">Book Appointment</a>
                                <a href="#" className="btn primary">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}