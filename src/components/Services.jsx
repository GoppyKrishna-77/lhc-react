import cardio from '../img/cardiology.svg';
import ortho from '../img/orthopedics.svg';

const Tile = (props) => {
    // iconImg, title
    return <>
        <div className="col-lg-2 col-md-3 col-sm-6 col-12 tile">
                <img src={props.iconImg} alt={props.title} />
                <span>{props.title}</span>
            </div>
    </>
}

export default function Services() {
	return (
		<>
			<section id="services" className="services">
				<div className="container">
					<h2 className="section-title">Our Services</h2>
					<div className="row justify-content-center gap-5">
                        <Tile title="Cardiology" iconImg={cardio}/>
                        <Tile title="Orthopedics" iconImg={ortho}/>
                        <Tile title="Cardiology" iconImg={cardio}/>
                        <Tile title="Orthopedics" iconImg={ortho}/>
                        <Tile title="Cardiology" iconImg={cardio}/>
                        <Tile title="Orthopedics" iconImg={ortho}/>
                        <Tile title="Cardiology" iconImg={cardio}/>
                        <Tile title="Orthopedics" iconImg={ortho}/>
                        <Tile title="Cardiology" iconImg={cardio}/>
                        <Tile title="Orthopedics" iconImg={ortho}/>
                        <Tile title="Cardiology" iconImg={cardio}/>
                        <Tile title="Orthopedics" iconImg={ortho}/>
                    </div>
				</div>
			</section>
		</>
	);
}
