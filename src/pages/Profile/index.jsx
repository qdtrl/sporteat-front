import { 
	Switch,
	Route } from "react-router-dom";
import ProfileMenu from '../../components/ProfileMenu';
import Informations from './Informations';
import NoMatch from '../../pages/NoMatch';
import Progression from './Progression'
import MealsOfTheDay from './MealsOfTheDay';
import WorkoutOfTheDay from './WorkoutOfTheDay';

const Profile = () => {

	return(
		<div className="profile-container">
			<ProfileMenu/>
			<>
				<Switch>			
					<Route path="/" exact>
						{ false ? <Informations/> : <WorkoutOfTheDay/> }
					</Route>
					<Route path="/meals-of-the-day" >
						<MealsOfTheDay/>
					</Route>
					<Route path="/workout-of-the-day">
						<WorkoutOfTheDay/>
					</Route>
					<Route path="/informations">
						<Informations/>
					</Route>
					<Route path="/progression">
						<Progression/>
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