import pic1 from "../img/gallery/G1.jpg";
import pic2 from "../img/gallery/G2.jpg";
import pic3 from "../img/gallery/G3.jpg";
import pic4 from "../img/gallery/G4.jpg";
import pic5 from "../img/gallery/G5.jpg";
import pic6 from "../img/gallery/G6.jpg";

const Pic = (props) => {
	// pic, alt
	return (
		<div className="single-gl">
			<img src={props.pic} alt={props.alt} />
		</div>
	);
};

export default function Gallery() {
	return (
		<>
			<section className="gallery section">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="section-title">
								<h2>Gallery</h2>
								<p style={{"fontSize":"18px"}}>
									Explore our state-of-the-art facilities and
									compassionate care
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="container-fluid">
					<div className="row">
						<div className="col-lg-12 col-12">
							<div className="owl-carousel gallery-slider">
								<Pic pic={pic1} alt="#" />
								<Pic pic={pic3} alt="#" />
								<Pic pic={pic4} alt="#" />
								<Pic pic={pic5} alt="#" />
								<Pic pic={pic2} alt="#" />
								<Pic pic={pic1} alt="#" />
								<Pic pic={pic6} alt="#" />
								<Pic pic={pic4} alt="#" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
