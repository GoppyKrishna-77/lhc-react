import logo from '../img/logo4.jpg';

export default function Navbar() {
	return (
		<>
			<header className="header">
				{/* <!-- Topbar --> */}
				<div className="topbar">
					<div className="container">
						<div className="row">
							<div className="col-lg-6 col-md-5 col-12">
								<ul className="top-link">
									<li>
										<a href="#about">About</a>
									</li>
									<li>
										<a href="#doctors">Doctors</a>
									</li>
									<li>
										<a href="#services">Services</a>
									</li>
									<li>
										<a href="#location">Location</a>
									</li>
								</ul>
							</div>
							<div className="col-lg-6 col-md-7 col-12">
								{/* <!-- Top Contact --> */}
								<ul className="top-contact">
									<li>
										<i className="fa fa-phone"></i>+044 000 9808
									</li>
									<li>
										<i className="fa fa-envelope"></i>
										<a href="mailto:random@email.com">
											random@email.com
										</a>
									</li>
								</ul>
								{/* <!-- End Top Contact --> */}
							</div>
						</div>
					</div>
				</div>
				{/* <!-- End Topbar --> */}
				{/* <!-- Header Inner --> */}
				<div className="header-inner">
					<div className="container">
						<div className="inner">
							<div className="row">
								<div className="col-lg-3 col-md-3 col-12">
									{/* <!-- Start Logo --> */}
									<div className="logo align-items">
										<a href="#">
											<img
												src={logo}
												alt="#"
												style={{"height": "80px", "padding-bottom": "0.5em"}}
											/>
										</a>
									</div>
									{/* <!-- End Logo --> */}
									{/* <!-- Mobile Nav --> */}
									<div className="mobile-nav"></div>
									{/* <!-- End Mobile Nav --> */}
								</div>
								<div className="col-lg-7 col-md-9 col-12">
									{/* <!-- Main Menu --> */}
									<div className="main-menu">
										<nav className="navigation">
											<ul className="nav menu">
												<li>
													<a href="#">Home</a>
												</li>
												<li>
													<a href="#doctors">
														Doctors{" "}
													</a>
												</li>
												<li>
													<a href="#services">
														Services{" "}
													</a>
												</li>
												<li>
													<a href="#about">About </a>
												</li>
												<li>
													<a href="#contact">
														Contact Us
													</a>
												</li>
											</ul>
										</nav>
									</div>
									{/* <!--/ End Main Menu --> */}
								</div>
								<div className="col-lg-2 col-12">
									<div className="get-quote">
										<a href="#appointment" className="btn">
											Book Appointment
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- End Header Inner --> */}
			</header>
			{/* <!-- End Header Area --> */}
		</>
	);
}
