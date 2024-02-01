import doc1Pic from "../img/profile_pic_male.png";
import doc2Pic from "../img/profile_pic_female.jpg";

const Tile = (props) => {
	// docImg, name, specialization
	return (
		<>
			<div className="col-lg-3 col-md-4 col-12">
				<div className="doctor-container d-flex flex-md-column flex-row justify-content-center align-content-sm-center">
					{/* <!-- Doctor Photo --> */}
					<img src={props.docImg} alt="" className="doctor-img" />

					{/* <!-- Doctor Information --> */}
					<div className="doctor-info">
						<h4>Dr.{props.name}</h4>
						<p>{props.specialization}</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default function Doctors() {
	return (
		<>
			<section className="doctors" id="doctors">
				<div className="container">
					<h2 className="section-title">Our Doctors</h2>
					<div className="row justify-content-center g-5 overflow-hidden">
						<p className="section-content">
							Meet our team of experienced and dedicated doctors.
						</p>
						<Tile
							name="Lasan"
							specialization="Cardiologist"
							docImg={doc1Pic}
						/>
						<Tile
							name="Lasan"
							specialization="Cardiologist"
							docImg={doc2Pic}
						/>
						<Tile
							name="Lasan"
							specialization="Cardiologist"
							docImg={doc1Pic}
						/>
						<Tile
							name="Lasan"
							specialization="Cardiologist"
							docImg={doc2Pic}
						/>
						<Tile
							name="Lasan"
							specialization="Cardiologist"
							docImg={doc1Pic}
						/>
						<Tile
							name="Lasan"
							specialization="Cardiologist"
							docImg={doc2Pic}
						/>
						<Tile
							name="Lasan"
							specialization="Cardiologist"
							docImg={doc1Pic}
						/>
						<Tile
							name="Lasan"
							specialization="Cardiologist"
							docImg={doc2Pic}
						/>
						<Tile
							name="Lasan"
							specialization="Cardiologist"
							docImg={doc1Pic}
						/>
						<Tile
							name="Lasan"
							specialization="Cardiologist"
							docImg={doc2Pic}
						/>
						<Tile
							name="Lasan"
							specialization="Cardiologist"
							docImg={doc1Pic}
						/>
					</div>
				</div>
			</section>
		</>
	);
}
