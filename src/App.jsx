import "./css/bootstrap.min.css";
import "./css/nice-select.css";
import "./css/font-awesome.min.css";

import "./css/icofont.css";
import "./css/slicknav.min.css";
import "./css/owl-carousel.css";

import "./css/animate.min.css";
import "./css/datepicker.css";

import "./css/normalize.css";
import "./index.css";
import "./css/responsive.css";

// import Preloader from "./components/Preloader";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Schedule from "./components/Schedule";
import About from "./components/About";
import Services from "./components/Services";
import Doctors from "./components/Doctors";
import Gallery from "./components/Gallery";
import Appointment from "./components/Appointment";
import Stats from "./components/Stats";
import Footer from "./components/Footer";

import Preloader from "./components/Preloader";

import { Component } from "react";

class App extends Component {

    
    render() {
        
		return (
			<>
                <Preloader />
				<Navbar />
				<Hero />
				<Schedule />
				<About />
				<Services />
				<Doctors />
				<Gallery />
				<Appointment />
				<Stats />
				<Footer />
			</>
		);
	}
}

export default App;
