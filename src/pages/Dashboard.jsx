const AppointmentCard = (props) => {
	return (
		<div className="appointment-card card mb-3">
			<div className="card-body">
				<div className="d-flex justify-content-between">
					<div>
						<h3 className="card-title">{props.patientName}</h3>
						<p>
							Contact Details : {props.contactNo}, {props.email}
						</p>
						<h6 className="mt-2">
							Doctor: {props.doctorName}, {props.department}
						</h6>
						<p className="mt-2 description">
							<span className="description-title">Description : </span>{props.description}
						</p>
					</div>
					<div>
						<h5>{props.date}</h5>
						<div className="form-check">
							<input
								className="form-check-input"
								type="checkbox"
								id="checkAppointment1"
							/>
							<label
								className="form-check-label"
								for="checkAppointment1"
							>
								Completed
							</label>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default function Dashboard() {
	return (
		<div className="container mt-4">
			<h2 className="mb-4">Doctor Appointments</h2>

			<AppointmentCard
				patientName="John"
				doctorName="Mohan"
				department="Cardiology"
				contactNo="9845456767"
				email="-"
				date="2 January 2020"
				description="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invid   "
			/>
		</div>
	);
}
