const Contact = (props) => {
	// email, phno, whatsappLink, InstagramLink, fbLink, twitterLink
	return (
		<div className="col-lg-3 col-md-6 col-12 contacts ml-sm-3">
			<h2 id="contact" className="f-title">
				Contact
			</h2>
			<div>
				<i className="fa fa-envelope" aria-hidden="true"></i>
				Email : <a href={`mailto:${props.email}`}>{props.email}</a>
			</div>
			<div className="mt-2">
				<i className="fa fa-phone" aria-hidden="true"></i>
				Cell : {props.phno}
			</div>

			<div className="d-flex justify-content-start gap-4 social-media-links mt-3">
				<div>
					<a href={props.whatsappLink}>
						<i className="fa fa-whatsapp" aria-hidden="true"></i>
					</a>
				</div>
				<div>
					<a href={props.InstagramLink}>
						<i className="fa fa-instagram" aria-hidden="true"></i>
					</a>
				</div>
				<div>
					<a href={props.fbLink}>
						<i
							className="fa fa-facebook-square"
							aria-hidden="true"
						></i>
					</a>
				</div>
				<div>
					<a href={props.twitterLink}>
						<i className="fa fa-twitter" aria-hidden="true"></i>
					</a>
				</div>
			</div>
		</div>
	);
};

const QuickLinkList = (props) => {
	//data
	return (
		<ul>
			{Object.keys(props.data).map((key) => {
				return (
					<li className="f-link">
						<a href={props.data[key]}>
							<i
								className="fa fa-caret-right"
								aria-hidden="true"
							></i>
							{key}
						</a>
					</li>
				);
			})}
		</ul>
	);
};

export default function Footer() {
	return (
		<footer id="footer" className="footer">
			{/* <!-- Footer Top --> */}
			<div className="footer-top">
				<div className="container">
					<div className="row gy-5">
						<Contact
							email="random@email.com"
							phno="+044 809304 403"
							whatsappLink=""
							InstagramLink=""
							fbLink=""
							twitterLink=""
						/>
						<div className="col-lg-3 col-md-6 col-12 ml-sm-3">
							<h2 className="f-title">Quick Links</h2>
							<div className="row">
								<div className="col-lg-6 col-md-6 col-12">
									<QuickLinkList
										data={{
											"Home": "#",
											"About Us": "#about",
											"Our Services": "#services",
											"Our Doctors": "#doctors",
											"Appointment": "#appointment",
											"Schedule": "#",
										}}
									/>
								</div>
							</div>
						</div>

						<div className="col-lg-3 col-md-6 col-12 ml-sm-3">
							<h2 className="f-title">Address</h2>
							<div>
								<p className="f-address">
									No 83, XYZ Street,
									<br />
									ABC Nagar, <br />
									Trichy - 45 <br />
									(Near _____)
								</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-12">
							<div>
								<iframe
                                    title="Hospital-location"
									id="location"
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.7210324522393!2d78.6487498743663!3d10.755969959572097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa601c73562101%3A0x95cace8cacaf6487!2sLasan%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1702647138196!5m2!1sen!2sin"
									style={{ border: "0" }}
									allowfullscreen=""
									loading="lazy"
									referrerpolicy="no-referrer-when-downgrade"
								></iframe>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!--/ End Footer Top --> */}
			{/* <!-- Copyright --> */}
			<div className="copyright">
				<div className="container">
					<div className="row">
						<div className="col-lg-12 col-md-12 col-12">
							<div className="copyright-content">
								<p>
									&copy; <a href="#">Lasan Health Care</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!--/ End Copyright --> */}
		</footer>
	);
}
