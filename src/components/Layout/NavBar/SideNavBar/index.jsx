import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LOGOUT } from '../../../../stores/actions';
import { 
	MdBadge,
	MdRestaurant,
	MdShowChart,
	MdFitnessCenter,
	MdOutlinePowerSettingsNew,
	MdHouse } from 'react-icons/md';
import images from '../../../../constants/images.jsx';
import './index.scss';

const SideNavBar = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const user = useSelector((state) => state);
	const [ toggleMenu, setToggleMenu ] = useState(false);

	const handleLogout = () => {
		dispatch( { type: LOGOUT } );
		history.push(`/`);
	};

	return (
		<section>
			<nav className="profile">
				<div className="user-container">
					<img className="profile-picture" src={images.profilPicture} alt="nom de l'utilisateur"/>
					{`${user.firstname} ${user.lastname}`}
				</div>
				<ul className="items"> 
					<Link className="item" to="/workout-of-the-day/choose">
						<MdFitnessCenter/>
						<p>Entraînement du jour</p>	
					</Link>
					<Link className="item" to="/meals-of-the-day">
						<MdRestaurant />
						<p>Menus du jour</p>
					</Link>
					<Link className="item" to="/progression">
						<MdShowChart/>
						<p>Progression</p>
					</Link>
					<Link className="item" to="/informations/compute-informations">   
						<MdBadge/>
						<p>Informations</p>
					</Link>
					<div className='line'/>
					<div className="item" onClick={handleLogout}>
						<MdOutlinePowerSettingsNew/>
						<p>Déconnexion</p>
					</div>
				</ul>
			</nav>
			<nav className="profile__smallscreen">
				<div className='user-container'>			
					<img className="profile-picture" onClick={() => setToggleMenu(!toggleMenu)} src={images.profilPicture} alt="nom de l'utilisateur"/>
					{ toggleMenu && <p className='p'>{`${user.firstname} ${user.lastname}`}</p> }
				</div>
				{ toggleMenu &&
					<div className="overlay flex__center slide__right">
						<div className="overlay__close" onClick={() => setToggleMenu(false)}>X</div>
						<Link className='item' onClick={() => setToggleMenu(false)} to="/">
							<MdHouse size='27' />
							<p>Accueil</p>
						</Link> 
						<Link className='item' onClick={() => setToggleMenu(false)} to="/workout-of-the-day/choose">
							<MdFitnessCenter size='27'/>
							<p>Entraînement du jour</p>
						</Link>  
						<Link className='item' onClick={() => setToggleMenu(false)} to="/meals-of-the-day">
							<MdRestaurant  size='27'/>
							<p>Menus du jour</p>	
						</Link>  
						<Link className='item' onClick={() => setToggleMenu(false)} to="/progression">
							<MdShowChart size='27'/>
							<p>Progression</p>
						</Link> 
						<Link className="item" onClick={() => setToggleMenu(false)} to="/informations/compute-informations">   
							<MdBadge/>
							<p>Informations</p>
						</Link>
						<div className='line'/>
						<div className='item' onClick={() => {
							handleLogout()
							setToggleMenu(false);
						}}>
							<MdOutlinePowerSettingsNew size='27'/>
							<p>Déconnexion</p>
						</div> 
					</div>
				}
			</nav>
		</section>
	)
}

export default SideNavBar;