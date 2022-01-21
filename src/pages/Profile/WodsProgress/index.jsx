import {useState, useEffect} from "react"
import {useFetch} from "../../hooks/useFetch";
import Menu from './menu'
import Progress from './progress'

const WodsProgress = () => {
    const [exercises, updateExercises] = useState();
    const [choice, updateChoice] = useState();
    // eslint-disable-next-line no-unused-vars
    const [perfs, updatePerfs] = useState();
    const [exercise, updateExercise] = useState();
    const {responseData, get} = useFetch(true);
    const {responseData:myPerfs, get:getPerfs} = useFetch(true);
    const {responseData:exo, get:getExos} = useFetch(true);
    useEffect(() => {
        get("/exercices")
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        getPerfs("/my_performances")
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        updateExercises(responseData);
    }, [responseData]);

    useEffect(() => {
        updatePerfs(myPerfs);
    }, [myPerfs])
    useEffect(() => {
        getExos(`/exercices/${choice}`)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [choice])
    useEffect(() => {
        updateExercise(exo);
    }, [exo])
    return(
        <div>
            <Menu exos={exercises} update={updateChoice}/>
            {
                choice
            }
            {
                exercise
                &&
                <Progress data={exercise}/>
            }
        </div>
    )
}

export default WodsProgress