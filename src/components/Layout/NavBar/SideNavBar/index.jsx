import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LOGOUT } from '../../../../stores/actions';
import icons from '../../../../constants/index';

const SideNavBar = () => {
	const dispatch = useDispatch();

	const handleLogout = () => {
		dispatch( { type: LOGOUT } );
	};

	return (
		<div className="profile-menu">
			<div className="profile-picture-container">
				<img className="profile-picture" src={""} alt="nom de l'utilisateur"/>
			</div>
			<ul className="list-menu"> 
				<Link className="link-menu" to="/workout-of-the-day/choose">
					<li className="items-list-menu">
						<img className="icons-menu" src={icons.sport} alt="icône entraînement"/>
						Entraînement du jour
					</li> 
				</Link>
				<Link className="link-menu" to="/meals-of-the-day">
					<li className="items-list-menu">
						<img className="icons-menu" src={icons.menu} alt="icône menu"/>
						Menus du jour
					</li> 
				</Link>
				<Link className="link-menu" to="/progression">
					<li className="items-list-menu">
						<img className="icons-menu" src={icons.statistics} alt="icône progression"/>
						Progression
					</li> 
				</Link>
				<Link className="link-menu" to="/informations/compute-informations">   
					<li className="items-list-menu">
						<img className="icons-menu" src={icons.informations} alt="icône informations"/>
						Informations
					</li>  
				</Link>
				<button 
					className="items-list-menu" 
					onClick={handleLogout}>
					Se déconnecter
				</button>
			</ul>
		</div>
	)
}

export default SideNavBar;