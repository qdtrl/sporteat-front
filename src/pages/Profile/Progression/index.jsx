import {useState, useEffect} from "react";
import { 
	LineChart, 
	Line, 
	CartesianGrid,
	XAxis, 
	YAxis } from 'recharts';
import {useFetch} from "../../../hooks/useFetch";
import Menu from './menu'

const Progression = () => {
	const [ userChoices, setUserChoices] = useState({ exercice_id: "", weight: "", select: ""});
	const [performances, setPerformances] = useState();
	const [ weights, setWeights ] = useState();
	const [exercices, setExercices] = useState();
	const {responseData, get} = useFetch(true);

	useEffect(() => {
		get("/my_performances")
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if(responseData) {
			setExercices(responseData.exercices);
		}
	}, [responseData]);

	const getExercicePerformances = () => {
		setPerformances(responseData?.performances?.filter(performance => performance.exercice_id === userChoices.exercice_id))
	}

	const getExerciceWeights = () => {
		const fill = [];
		performances?.forEach(performance => {
			console.log(0 in [1,2,0]);
			if(Number(performance.weight) in fill) {
				console.log('test');
				return
			}
			else 
				fill.push(performance.weight);
		});
		setWeights(fill);
	}

	useEffect(() => {
		console.log(weights);
	}, [weights])

	useEffect(() => {
		if (exercices)
			getExerciceWeights()
	}, [userChoices, performances])

	useEffect(() => {
		console.log("user", userChoices, performances);
	}, [performances])


	useEffect(() => {
		if (responseData)
			setPerformances(responseData.performances);
		if (userChoices.exercice_id)
			getExercicePerformances()
	}, [userChoices])

	return(
		<section className="chart">
		<Menu 
			exercices={exercices} 
			weights={weights}
			userChoices={userChoices}
			setUserChoices={setUserChoices}/>
		<div className="chart-performances">
			<LineChart
				width={400}
				height={400}
				data={performances}
				>
				<Line 
					type="monotone"
					dataKey={'repetitions'}
					stroke="#8884d8"/>
				<CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
				<XAxis dataKey="created_at" />
				<YAxis dataKey="weight"/>
			</LineChart>
		</div>
		</section>
	)
}

export default Progression;