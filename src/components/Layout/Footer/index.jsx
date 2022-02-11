import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './index.scss';


const Footer = () => {
	const user = useSelector((state) => state);
	const location = useLocation().pathname;
    return (
			<footer className="container">
				{ !user.isLogged &&
       	<section className="section">
					<div className="description">
						<Link className="logo" to="/">                
								<strong>Sport</strong>Eat
						</Link>
						<p><strong>Sport</strong>Eat est une entreprise spécialisée dans le suivi sportif et nutritionnel</p>
					</div>
					<nav className="nav">
						<h3>Liens utiles</h3>
						<Link className={`items p ${location === "/" ? "active" : ""}`} to="/">
							Accueil
						</Link>
						<Link className={`items p ${location === "/sport" ? "active" : ""}`} to="/sport">
							Le sport
						</Link>    
						<Link className={`items p ${location === "/meal" ? "active" : ""}`} to="/meal">
							Les repas
						</Link>
						<Link className={`items p ${location === "/meal" ? "active" : ""}`} to="/signup">
							S'inscrire
						</Link>
						<Link className={`items p ${location === "/login" ? "active" : ""}`} to="/login">
							Me connecter
						</Link>      
					</nav>
					<address className="">
						<h3>Contactez-nous</h3>
						<p>E-mail: <a href="mailto:contact@sporteat.com">contact@sporteat.fr</a> </p>
					</address>
				</section> }
				<div className='line'/>
        <p className="mentions">© 2022 <span>Sport</span>Eat, tous droits réservés.</p>
      </footer>
    )
}

export default Footer;