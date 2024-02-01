import React from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const Error404 = () => {
	const navigate = useNavigate();
	return (
		<>
			<Navbar />
			<section className="error-page section">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 offset-lg-3 col-12">
							<div className="error-inner">
								<h1>
									404
									<span>Sorry we can't find that page!</span>
								</h1>
							</div>
                            <a href="/"><button
								className="btn mt-4"
								style={{ fontSize: "25px" }}
							>
								<i
									className="fa fa-home"
									style={{
										fontSize: "30px",
										marginRight: "10px",
									}}
								></i>
								Return to Home Page
							</button></a>
							
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
};
