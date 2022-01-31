import { FC } from 'react';
import { Link, Route, Switch, useLocation } from 'react-router-dom';
import Create from './Create';
import Flow from './Flow';
import Improve from './Improve';

const WorkoutOfTheDay:FC = () => {
  const location = useLocation().pathname;

	const entrainements = [
	{
		url: "/workout-of-the-day/create",
		title: "Creation d'une seance"
	},
	{
		url: "/workout-of-the-day/flow",
		title: "Flow"
	},
	{
		url: "/workout-of-the-day/improve",
		title: "Ameliorer une de ses seances"
	}];

	return (
		<section className="workout_of_the_day">
			<h1>Que faisont nous pour la seance d'aujourd'hui ?</h1>
			<p>Noublie pas d'ajouter le nouveau materiel que tu peux utiliser pour ton entrainement</p>
			<nav>
				{entrainements.map(({url, title}, index) => (
					<Link key={index} className={`link ${location === url ? "active" : ""}`} to={url}>
						{title}
					</Link>
				))}
			</nav>
			<Switch>
				<Route path="/workout-of-the-day/improve" exact>
					<Improve/>
				</Route> 
        <Route path="/workout-of-the-day/create" exact>
					<Create/>
				</Route> 
				<Route path="/workout-of-the-day/flow" exact >
					<Flow/>
				</Route> 
			</Switch>

		</section>
	)
}

export default WorkoutOfTheDay;
