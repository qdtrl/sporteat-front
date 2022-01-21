import ProfileMenu from '../../components/ProfileMenu/index';
import ProfileInformations from './Informations';
import Wods from '../Wods';
import Mod from '../Mod';
import NoMatch from '../../pages/NoMatch';
import WodsProgress from '../WodsProgress/'
import { 
	Switch,
	Route } from "react-router-dom";
import MyEquipement from '../MyEquipement';


const Profile = () => {


	return(
		<div className="profile-container">
			<ProfileMenu/>
		<>
			<Switch>			
				
				<Route path="/" component={ProfileInformations} exact></Route>

				<Route path="/meals-of-the-day" component={Mod} ></Route>

				<Route path="/wods" component={Wods} ></Route>

				<Route path="/parameters" component={ProfileInformations} ></Route>

				<Route path="/progress">
					<WodsProgress/>
				</Route>

				
        <Route path="/my-equipement" component={MyEquipement}/>
          
				<Route>
					<NoMatch />
				</Route> 			
				
			</Switch>
			
		</>
		</div>
	)
}

export default Profile;