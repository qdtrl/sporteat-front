import { 
  Switch,
  Route } from "react-router-dom";
import Choose from "./Choose";
import Validation from './Validation';
import Perform from "./Perform";

const WorkoutOfTheDay = () => {
  return (
    <section className="workout_of_the_day">
      <Switch>
				<Route path="/workout-of-the-day/choose">
					<Choose/>
				</Route> 
        <Route path="/workout-of-the-day/validation">
					<Validation/>
				</Route> 
				<Route path="/workout-of-the-day/perform">
					<Perform/>
				</Route> 
			</Switch>
    </section>
  )
}

export default WorkoutOfTheDay;