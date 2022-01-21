import Register from "../Register";
import PresentationCards from './PresentationCards';


const HomePage = () => {
	return (
		<div className="homepage-container">
			<div className="header">
				<div className="jumbotron">
					<h1>Sporteat, </h1>
					<h2>Le sport sur mesure, jusque dans l'assiette !</h2>
					<p>On vous propose un <strong>programme sportif</strong> et <strong>nutrionnel</strong>,</p>
					<p>afin que vous atteignez rapidement les <strong>objectifs</strong> que vous fixez !</p>
				</div>
				<Register />
			</div>
			<div className="card-homepage">             
					<PresentationCards/>
			</div>
		</div>			
	)
};

export default HomePage;