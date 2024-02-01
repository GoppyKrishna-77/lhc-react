import slider1 from "../img/slider2.jpg";
import slider2 from "../img/slider.jpg";
import slider3 from "../img/slider3.jpg";

const Slider = (props) => {
	// bgImg, title, content, link1, link2, position

    var pos_class = "";

    if (props.position === "right")
        pos_class = "row align-items-end";

    else if (props.position === "left")
        pos_class = "row";

	return (
		<>
			<div
				className="single-slider"
				style={{ backgroundImage: `url(${props.bgImg})` }}
			>
				<div className="container">
					<div className={pos_class}>
						{(props.position==="right") && <div className="col"></div>}
						<div className="col-lg-7">
							<div className="text">
								<h1>{props.title}</h1>
								<p>{props.content}</p>
								<div className="button">
									<a href={props.link1} className="btn">
										Book Appointment
									</a>
									<a
										href={props.link2}
										className="btn primary"
									>
										Learn More
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default function Hero() {
	return (
		<>
			<section id="hero" className="slider">
				<div className="hero-slider">
					<Slider
						bgImg={slider1}
						title={
							<>
								<span>Lasan Health Care</span>
								<br></br>
								Where Compassion Meets Convenience
							</>
						}
						content="Schedule Your Appointment for our
                        Exceptional Healthcare"
						link1="#appointment"
						link2="#"
                        position="right"
					/>
					<Slider
						bgImg={slider2}
						title={
							<>
								Dedicated to <span>Healing,</span>
								Committed to <span>Care</span>
							</>
						}
						content="Discover the Heart of Lasan Health
                        Care"
						link1="#appointment"
						link2="#about"
                        position="left"
					/>
					<Slider
						bgImg={slider3}
						title={
							<>
								Empowering <span>Lives</span> Through Excellence
								in <span>Healthcare</span>
							</>
						}
						content="Transforming lives with exceptional
                        healthcare at Lasan Health Care."
						link1="#appointment"
						link2="#contact"
                        position="right"
					/>
				</div>
			</section>
		</>
	);
}
