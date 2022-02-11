	import { useState, useEffect } from "react";
	import { Link, useLocation } from "react-router-dom";
	import { GiHamburgerMenu } from 'react-icons/gi';
	import logo from "../../../../assets/logo.png";
	import './index.scss';
	
	const MenuHome = () => {
	const location = useLocation().pathname;
	const navHeight = window.innerHeight/10;
	const [navToggle, setNavToggle] = useState(false);
	const [ toggleMenu, setToggleMenu ] = useState(false);

	const handleScroll =() => {    
		if (window.scrollY > navHeight)
			setNavToggle(true)
		else       
			setNavToggle(false)
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
		}, []);


	return (
		<nav className={`navbar ${navToggle? "scrolled" : ""}`} >
			<Link className="navbar__left" to="/">  
				<img className="logo" src={logo} alt="logo sporteat"/>                  
				<div className="logo">     
					Sport<strong className="eat">Eat</strong>
				</div>
			</Link>
			<div className="navbar__right">
				<Link className={`items p ${location === "/" ? "active" : ""}`} to="/">
					Accueil
				</Link> 
				<Link className={`items p ${location === "/sport" ? "active" : ""}`} to="/sport">
					Le sport
				</Link>  
				<Link className={`items p ${location === "/meal" ? "active" : ""}`} to="/meal">
					Les repas
				</Link>  
				<Link className="items button__custom" to="/login">
					Me connecter
				</Link>                
			</div>
			<div className="navbar__smallscreen">
				<GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
				{ toggleMenu &&
					<div className="overlay flex__center slide__bottom">
						<div className="overlay__close" onClick={() => setToggleMenu(false)}>X</div>
						<Link onClick={() => setToggleMenu(false)} className={`items p ${location === "/" ? "active" : ""}`} to="/">
							Accueil
						</Link> 
						<Link onClick={() => setToggleMenu(false)} className={`items p ${location === "/sport" ? "active" : ""}`} to="/sport">
							Le sport
						</Link>  
						<Link onClick={() => setToggleMenu(false)} className={`items p ${location === "/meal" ? "active" : ""}`} to="/meal">
							Les repas
						</Link>  
						<Link onClick={() => setToggleMenu(false)} className="button__custom" to="/login">
							Me connecter
						</Link>  
					</div>
				}
			</div>
		</nav>
	)
	}

	export default MenuHome;