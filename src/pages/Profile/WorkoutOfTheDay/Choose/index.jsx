import {
	Link,
	Route,
	Switch,
	useLocation } from 'react-router-dom';
import Create from './Create';
import Flow from './Flow';
import Improve from './Improve';
import './index.scss';
const Choose = ({workout, saveWorkout}) => {
  const location = useLocation().pathname;

	const entrainements = [
	{
		url: "/workout-of-the-day/choose/create",
		title: "Creation d'une seance"
	},
	{
		url: "/workout-of-the-day/choose/flow",
		title: "Flow"
	},
	{
		url: "/workout-of-the-day/choose/improve",
		title: "Ameliorer une de mes seances"
	}];

	return (
		<>
			<h1>Que faisont nous pour la seance d'aujourd'hui ?</h1>
			<p>Noublie pas d'ajouter le nouveau materiel que tu peux utiliser pour ton entrainement</p>
			<nav className='entrainement'>
				{entrainements.map(({url, title}, index) => (
					<Link key={index} className={`link ${location === url ? "active" : ""}`} to={url}>
						{title}
					</Link>
				))}
			</nav>
			<Switch>
				<Route path={entrainements[0].url} exact>
					<Create workout={workout} saveWorkout={saveWorkout}/>
				</Route> 
        <Route path={entrainements[1].url} exact>
					<Flow workout={workout} saveWorkout={saveWorkout}/>
				</Route> 
				<Route path={entrainements[2].url} exact >
					<Improve saveWorkout={saveWorkout}/>
				</Route> 
			</Switch>
		</>
	)
};

export default Choose;