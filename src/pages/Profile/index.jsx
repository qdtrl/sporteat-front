import { 
	Switch,
	Route } from "react-router-dom";
import ProfileMenu from '../../components/ProfileMenu';
import Informations from './Informations';
import Wods from './Wods';
import Mod from './Mod';
import NoMatch from '../../pages/NoMatch';
import WodsProgress from './WodsProgress/'

const Profile = () => {

	return(
		<div className="profile-container">
			<ProfileMenu/>
			<>
				<Switch>			
					<Route path="/" exact>
						{ false ? <Informations/> : <Wods/> }
					</Route>
					<Route path="/meals-of-the-day" >
						<Mod/>
					</Route>
					<Route path="/workout-of-the-day">
						<Wods/>
					</Route>
					<Route path="/informations">
						<Informations/>
					</Route>
					<Route path="/progress">
						<WodsProgress/>
					</Route>
					<Route>
						<NoMatch />
					</Route> 			
				</Switch>
			</>
		</div>
	)
}

export default Profile;