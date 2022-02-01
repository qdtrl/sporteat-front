import { 
	useState,
	useEffect } from 'react';
import { 
  Switch,
  Route } from "react-router-dom";
import Choose from "./Choose";
import Validation from './Validation';
import Perform from "./Perform";

const WorkoutOfTheDay = () => {
	const [ panier, setPanier ] = useState([]);

	useEffect(() => {
		console.log(panier);
	}, [panier]);

  return (
    <section className="workout_of_the_day">
      <Switch>
				<Route path="/workout-of-the-day/choose">
					<Choose panier={panier} setPanier={setPanier}/>
				</Route> 
        <Route path="/workout-of-the-day/validation">
					<Validation panier={panier} setPanier={setPanier}/>
				</Route> 
				<Route path="/workout-of-the-day/perform">
					<Perform panier={panier}/>
				</Route> 
			</Switch>
    </section>
  )
}

export default WorkoutOfTheDay;