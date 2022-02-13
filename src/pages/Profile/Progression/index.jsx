import {
	useState,
	useEffect } from "react";
import {
	LineChart,
	Line,
	CartesianGrid,
	XAxis,
	YAxis } from 'recharts';
import Loader from "../../../components/Loader";
import { useFetch } from "../../../hooks/useFetch";
import Menu from './menu';
import './index.scss';

const Progression = () => {
	const [ userChoices, setUserChoices] = useState(
		{ 
			exercice_id: "",
			weight: "",
			select: "repetitions"
		});
	const [performances, setPerformances] = useState();
	const [ weights, setWeights ] = useState();
	const [exercices, setExercices] = useState();
	const { isLoading, responseData, get } = useFetch(true);

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
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [userChoices, performances, exercices])

	useEffect(() => {
		console.log("user", userChoices, performances);
	}, [performances, userChoices])

	useEffect(() => {
		if (responseData)
			setPerformances(responseData.performances);
		if (userChoices.exercice_id)
			getExercicePerformances()
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [responseData, userChoices])

	return(
		<section className="chart flex__profile">
			{ isLoading && <Loader/> }
			{ (responseData && !isLoading ) && <><Menu
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
						dataKey={userChoices.select}
						stroke="#8884d8"/>
					<CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
					<XAxis dataKey="created_at" />
					<YAxis dataKey="weight"/>
				</LineChart>
			</div> </>}
		</section>
	)
}

export default Progression;