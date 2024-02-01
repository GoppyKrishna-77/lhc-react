const Stat = (props) => {
	// iconClass, count, title

	return (
		<div className="col-lg-3 col-md-6 col-12">
			<div className="stat d-flex flex-row">
				<i className={props.iconClass}></i>
				<div className="content">
					<span className="counter">{props.count}</span>
					<p>{props.title}</p>
				</div>
			</div>
		</div>
	);
};

export default function Stats() {
	return (
		<div id="stats" className="stats section">
			<div className="container">
				<div className="row justify-content-center gy-5">
					<Stat
						iconClass="fa fa-bed"
						count={3000}
						title="Hospital Beds"
					/>
					<Stat
						iconClass="fa fa-stethoscope"
						count={20}
						title="Specialist Doctors"
					/>
					<Stat
						iconClass="icofont-simple-smile"
						count={4500}
						title="Happy Patients"
					/>
					<Stat
						iconClass="icofont icofont-medal"
						count={15}
						title="Years of Experience"
					/>
				</div>
			</div>
		</div>
	);
}
