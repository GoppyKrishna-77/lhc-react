import appointmentImg from "../img/contact-img.png";

export default function Login() {
	return (
		<div className="container">
			<div className="row justify-content-center d-flex align-items-center mt-5">
				<div className="col-md-6 col-lg-4">
					<img
						src={appointmentImg}
						alt="Doctor"
						className="doctor-image mb-4"
					/>
				</div>
				<div className="col-md-6 col-lg-4">
					<div className="login-container">
						<h3 className="mb-4 text-center">Doctor Login</h3>
						<form>
							<div className="mb-3">
								<label for="username" className="form-label">
									Username
								</label>
								<input
									type="text"
									className="form-control"
									id="username"
									name="username"
									required
								/>
							</div>
							<div className="mb-3">
								<label for="password" className="form-label">
									Password
								</label>
								<input
									type="password"
									className="form-control"
									id="password"
									name="password"
									required
								/>
							</div>
							<button
								type="submit"
								className="btn btn-primary btn-block"
							>
								Login
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
