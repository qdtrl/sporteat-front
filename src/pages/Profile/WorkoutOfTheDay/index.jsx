import { 
	useState,
	useEffect } from 'react';
import { 
  Switch,
  Route } from "react-router-dom";
import Choose from "./Choose";
import Validation from './Validation';
import Perform from "./Perform";
import Save from './Save';
import './index.scss';

const WorkoutOfTheDay = () => {
	const getWorkout = () => {
    const loadData = JSON.parse(localStorage.getItem('workout-cart'));
    return loadData ? loadData : { wod: {id: 0, name: "Nouvelle seance", calories: 0 }, exercices: []}
	};

	const [ workout, setWorkout ] = useState(getWorkout())

	const saveWorkout = (workoutCart) => {
		const workoutJson = JSON.stringify(workoutCart);
    localStorage.setItem('workout-cart', workoutJson);
    setWorkout(getWorkout())
	};

	useEffect(() => {
		return () => localStorage.removeItem('workout-cart');
	}, [])

  return (
    <section className="workout_of_the_day flex__entrainement">
      <Switch>
				<Route path="/workout-of-the-day/choose">
					<Choose workout={workout} saveWorkout={saveWorkout}/>
				</Route> 
        <Route path="/workout-of-the-day/validation">
					<Validation workout={workout} saveWorkout={saveWorkout}/>
				</Route> 
				<Route path="/workout-of-the-day/perform">
					<Perform workout={workout}/>
				</Route> 
				<Route path="/workout-of-the-day/save">
					<Save workout={workout} saveWorkout={saveWorkout}/>
				</Route>
			</Switch>
    </section>
  )
}

export default WorkoutOfTheDay;