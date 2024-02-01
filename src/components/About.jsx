import stethoscope from "../img/stethoscope.svg";
import medicine from "../img/medicine.svg";
import mop from "../img/mop.svg";
import lab from "../img/lab.svg";

import video from "../video/VideoTemplate.mp4";

const AboutLHS = () => {
	return (
		<>
			<div className="about-left">
				<h3>Who Are We</h3>
				<p>
					Welcome to{" "}
					<b className="text-primary-blue">Lasan Health Care,</b>{" "}
					where your health is our top priority. Immerse yourself in a
					healthcare experience built on trust and excellence.
				</p>
				<p>
					Our holistic approach combines leading-edge medical
					expertise with compassionate care, ensuring your well-being
					is nurtured with personalized services, community focus, and
					enduring value.
				</p>
				<div className="row">
					<div className="col-lg-6">
						<ul className="list">
							<li className="d-flex flex-row justify-content-start">
								<img src={stethoscope} />
								<div>Medical Expertise</div>
							</li>
							<li className="d-flex flex-row justify-content-start">
								<div
									style={{
										marginLeft: "4px",
										marginRight: "8px",
									}}
								>
									<i className="fa fa-user"></i>
								</div>
								<div>Patient-Centered Experience</div>
							</li>
							<li className="d-flex flex-row justify-content-start">
								<img
									style={{
										marginLeft: "-2px",
										marginRight: "12px",
									}}
									src={medicine}
								/>
								<div>On-Site Pharmacy Convenience</div>
							</li>
						</ul>
					</div>
					<div className="col-lg-6">
						<ul className="list">
							<li className="d-flex flex-row justify-content-start">
								<div>
									<i className="fa fa-ambulance"></i>
								</div>
								<div>Swift Emergency Services</div>
							</li>
							<li className="d-flex flex-row justify-content-start">
								<img src={mop} />
								<div>Immaculate Hygiene Standards</div>
							</li>
							<li className="d-flex flex-row justify-content-start">
								<img src={lab} />
								<div>Comprehensive Lab Facilities</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default function About() {
	return (
		<>
			<section id="about" className="about section">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="section-title">
								<h2>
									Your{" "}
									<span className="text-primary-blue">
										Health,
									</span>{" "}
									Our{" "}
									<span className="text-primary-blue">
										Pledge
									</span>
								</h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-6 col-12">
							<AboutLHS />
						</div>
						<div className="col-lg-6 col-12">
							{/* <!-- Start about RHS --> */}
							<div className="about-right d-flex justify-content-center">
								<div className="video-image">
									<video autoPlay controls muted loop>
										<source src={video} type="video/mp4" />
									</video>
								</div>
							</div>
							{/* <!-- End about RHS --> */}
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
