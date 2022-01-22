import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LOGOUT } from '../../stores/actions';
import profilePicture from '../../assets/profile-picture.png';
import informations from '../../assets/icons/informations.png';
import menu from '../../assets/icons/menu2.png';
import sport from '../../assets/icons/sport.png';
// import favorite from '../../assets/icons/favorite.png';
import statistics from '../../assets/icons/statistics.png';



const ProfileMenu = () => {
	const dispatch = useDispatch();

	const handleLogout = () => {
		dispatch( { type: LOGOUT } );
	};

	return (
		<div className="profile-menu">
			<div className="profile-picture-container">
				<img className="profile-picture" src={profilePicture} alt="nom de l'utilisateur"/>
			</div>
			<ul className="list-menu"> 
				<Link className="link-menu" to="/workout-of-the-day">
					<li className="items-list-menu">
						<img className="icons-menu" src={sport} alt="icône entraînement"/>
						Entraînement du jour
					</li> 
				</Link>
				<Link className="link-menu" to="/meals-of-the-day">
					<li className="items-list-menu">
						<img className="icons-menu" src={menu} alt="icône menu"/>
						Menus du jour
					</li> 
				</Link>
				<Link className="link-menu" to="/progress">
					<li className="items-list-menu">
						<img className="icons-menu" src={statistics} alt="icône progression"/>
						Progression
					</li> 
				</Link>
				<Link className="link-menu" to="/informations/compute-informations">   
					<li className="items-list-menu">
						<img className="icons-menu" src={informations} alt="icône informations"/>
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

export default ProfileMenu;