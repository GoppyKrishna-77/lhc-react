const ScheduleCard = (props) => {
	// iconClass, title, content, link, position
	return (
		<div className="col-lg-4 col-md-6 col-12">
			<div className={`single-schedule ${props.position}`}>
				<div className="inner">
					<div className="icon">
						<i className={props.iconClass}></i>
					</div>
					<div className="single-content">
						<h4>{props.title}</h4>
						<p>{props.content}</p>
						<a href={props.link}>
							LEARN MORE
							<i className="fa fa-long-arrow-right"></i>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default function Schedule() {
	return (
		<>
			<section id="schedule" className="schedule">
				<div className="container">
					<div className="schedule-inner">
						<div className="row">
							<ScheduleCard
								iconClass="icofont icofont-ambulance"
								title="Emergency Cases"
								content="For Emergency Services please contact +044 000 9808"
								link="#"
								position="first"
							/>
							<ScheduleCard
								iconClass="icofont-prescription"
								title="Doctors Schedule"
								content={
									<ul className="time-sidual">
										<li className="day">
											General Checkup
											<span>8.00 AM - 8.00 PM</span>
										</li>
										<li className="day">
											Emergency Cases
											<span>24 hrs</span>
										</li>
									</ul>
								}
								link="#"
								position="middle"
							/>
							<ScheduleCard
								iconClass="icofont-ui-clock"
								title="Opening Hours"
								content={
									<ul className="time-sidual">
										<li className="day">
											Monday - Friday
											<span>8.00 AM - 8.00 PM</span>
										</li>
										<li className="day">
											Saturday - Sunday
											<span>7.00 AM - 9.00 PM</span>
										</li>
									</ul>
								}
								link="#"
								position="last"
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
