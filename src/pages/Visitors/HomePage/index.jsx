import { Link } from "react-router-dom";
import Register from "../Register";
import images from '../../../constants/images';
import './index.scss';

const HomePage = () => {
	return (
		<>
		<section className="homepage wrapper padding">
			<div className="wrapper__info">
				<h1>Commence ton aventure,</h1>
				<div className="flex">
					<div className="quote"/>
					<p>Ensemble nous vous suivrons jusqu'au sommets!</p>
				</div>
				<div className="flex">
					<div className="trait"></div>
					<Link className="button__custom" to="/signup">S'inscrire</Link>
				</div>
			</div>

			<div className="wrapper__img">
				<img src={images.manRunning} alt='running man'/>
			</div>
		</section>
		<section className="aboutus padding bg-sport flex__center">
			<div className='overlay flex__center padding'>
				<h2>SportEat, c'est quoi ?</h2>
			</div>
			<div className='content flex__center'>
				<div className='sport'>
					<h3>Le sport</h3>
					<p>La possibilite de creer ses seances de sport prefere et de suivre la progression de ses performances.</p>
					<Link className='button__custom' to="/sport">En savoir plus</Link>
				</div>
				<div className='knife flex__center'>
					<img src={images.knife} alt='knife' />
				</div>
				<div className='meal'>
					<h3>Les repas</h3>
					<p>Des recettes sur mesures pour etre au meilleur de sa forme pour la poursuite de ses objectifs.</p>
					<Link className='button__custom' to="/meal">En savoir plus</Link>
				</div>
			</div>
		</section>
		<Register />
		<section className="contactus padding bg-meal flex__center">
			<form className="contactus">
				<h2>Nous contacter</h2>
				<div className="details">
					<div className="half">
						<label htmlFor="">Votre prenom:</label>
						<input type="text" name="name" placeholder="Prenom"/>
					</div>
					<div className="half">
						<label htmlFor="">Votre e-mail:</label>
						<input type='email' name="email" placeholder="nom@mail.com"/>
					</div>
				</div>
				<div className="full">
					<label htmlFor="">Votre question:</label>
					<textarea name="question" placeholder="Posez votre question"/>
				</div>
				<button className="button__custom">Envoyer le message</button>
			</form>
		</section>
		</>		
	)
};

export default HomePage;