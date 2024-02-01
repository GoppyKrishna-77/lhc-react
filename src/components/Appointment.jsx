import appointmentImg from "../img/contact-img.png";

const DropDownOptions = (props) => {
	// options : 1st Element default value
	return (
		<>
			<ul className="list">
				{props.options.map((ele, index) => {
					if (index === 0)
						return (
							<li data-value="1" className="option selected" hidden>
								{ele}
							</li>
						);
					else
						return (
							<li data-value={index + 1} className="option">
								{ele}
							</li>
						);
				})}
			</ul>
		</>
	);
};

export default function Appointment() {
	return (
		<>
			<section id="appointment" className="appointment">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="section-title">
								<h2>
									Book An{" "}
									<span className="text-primary-blue">
										Appointment
									</span>
								</h2>
								<p style={{"fontSize": "large"}}>
									We Are Always Ready to Help You.
								</p>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-6 col-md-12 d-flex justify-content-center">
							<div className="appointment-image">
								<img src={appointmentImg} alt="#" />
							</div>
						</div>
						<div className="col-lg-6 col-md-12 col-12">
							<form className="form" action="#">
								<div className="row g-4">
									<div className="col-lg-6 col-md-6 col-12">
										<div className="form-group">
											<input
												name="name"
												type="text"
												placeholder="Name"
											/>
										</div>
									</div>
									<div className="col-lg-6 col-md-6 col-12">
										<div className="form-group">
											<input
												name="email"
												type="email"
												placeholder="Email"
											/>
										</div>
									</div>
									<div className="col-lg-6 col-md-6 col-12">
										<div className="form-group">
											<input
												name="phone"
												type="text"
												placeholder="Phone"
											/>
										</div>
									</div>
									<div className="col-lg-6 col-md-6 col-12">
										<div className="form-group">
											<input
												type="date"
												placeholder="DD/MM/YYYY"
                                                min={new Date().toISOString().slice(0, 10)}
											/>
										</div>
									</div>
									<div className="col-lg-6 col-md-6 col-12">
										<div className="form-group">
											<div className="nice-select form-control wide">
												<span className="current">
													Department
												</span>
												<DropDownOptions
													options={[
														"Department",
														"General Health Check",
														"Neurology",
														"Dermatology",
														"Gastroenterology",
													]}
												/>
											</div>
										</div>
									</div>
									<div className="col-lg-6 col-md-6 col-12">
										<div className="form-group">
											<div
												className="nice-select form-control wide"
												tabindex="0"
											>
												<span className="current">
													Doctor
												</span>
												<DropDownOptions
													options={[
														"Doctor",
														"Lasan",
														"Lasan1",
														"Lasan2",
													]}
												/>
											</div>
										</div>
									</div>
									<div className="col-lg-12 col-md-12 col-12">
										<div className="form-group">
											<textarea
												name="message"
												placeholder="Write Your Message Here....."
											></textarea>
										</div>
									</div>
								</div>
								<div className="row mt-4">
									<div className="col-lg-5 col-md-4 col-12">
										<div className="form-group">
											<div className="button">
												<button
													type="submit"
													className="btn"
												>
													Book An Appointment
												</button>
											</div>
										</div>
									</div>
									<div className="col-lg-7 col-md-8 col-12">
										<p>
											( We will be confirm by an Text
											Message )
										</p>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
