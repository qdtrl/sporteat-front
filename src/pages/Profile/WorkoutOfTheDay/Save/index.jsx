import { useState, useEffect } from 'react';
import { useFetch } from '../../../../hooks/useFetch';

const Save = ({workout, saveWorkout}) => {
  const [favory, setFavory] = useState(workout.wod.id ? true : false)
  const { responseData, post, destroy} = useFetch(true);

  useEffect(() => {
    if(favory) {
      post('/wods', workout);
    } else {
      destroy(`/wod/${workout.id}`)
      saveWorkout({...workout, wod: { ...workout.wod, id: 0}})
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [favory]);

  useEffect(() => {
    if (responseData) {
      console.log("la Reponse", responseData);
      saveWorkout({...workout, wod: { ...workout.wod, id: responseData.wod.id}})
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [responseData])

  const handleChangeExercices = (e) => {
    const { name, value, id } = e.target;
    const exercices = workout.exercices.map((exercice, index) => {
      if (Number(id) === index )
        return { ...exercice, performance: { ...exercice.performance, [name]: Number(value) }}
      else
        return exercice
    })
    e.preventDefault();
    saveWorkout({ wod: workout.wod, exercices: exercices })
  }

  return (
    <>
      <h1>Sauvegarder mes performances</h1>
      <button onClick={() => setFavory(!favory)}>{favory ? "Full Star" : "Empty Star"}</button>
      <h2>{workout.wod?.name} - {workout.wod?.calories} calories</h2>
      <h3>Les exercices</h3>
        <ul>
        { workout?.exercices?.map(({equipement, exercice, performance}, index) => (
          <li id={index} key={index}>
            {exercice.name}
            {equipement.id !== 1 && <><label>poids</label>
            <input
              id={index} 
              type="number"
              name="weight"
              onChange={handleChangeExercices}
              value={performance.weight}
              min="0"/></>}
            <label>repetitions</label>
            <input
              id={index}
              type="number"
              name="repetitions"
              onChange={handleChangeExercices}
              value={performance.repetitions}
              min="1"/>
            <label>tours</label>
            <input 
              id={index}
              type="number" 
              name="rounds" 
              onChange={handleChangeExercices}
              value={performance.rounds}
              min="1"/>
          </li>
        ))}
        </ul>
    </>
  )
}

export default Save;