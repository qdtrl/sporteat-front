import { Link } from 'react-router-dom';

const Validation = ({workout, saveWorkout}) => {
  const handleChange = (e) => {
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
      <h1>Verifier la seance !</h1>
      <div>
        <Link to="/workout-of-the-day/choose">Retourner choisir d'autres exercices</Link>
        { workout.exercices.length !== 0 && <Link to="/workout-of-the-day/perform">C'est parti !</Link> }
      </div>
      { workout.exercices.length !== 0 && <div>
        <h2>{workout.wod?.name} - {workout.wod?.calories} calories</h2>
        <h3>L'équipement necessaire</h3>
        <ul>
        { workout?.exercices?.map(({equipement}, index) => (
          <li key={index}>{equipement.name}</li>
        ))}
        </ul>
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
              onChange={handleChange}
              value={performance.weight}
              min="0"/></>}
            <label>repetitions</label>
            <input
              id={index}
              type="number"
              name="repetitions"
              onChange={handleChange}
              value={performance.repetitions}
              min="1"/>
            <label>tours</label>
            <input 
              id={index}
              type="number" 
              name="rounds" 
              onChange={handleChange}
              value={performance.rounds}
              min="1"/>
          </li>
        ))}
        </ul>
        <Link to="/workout-of-the-day/perform">C'est parti !</Link>
      </div> }
    </>
  )
}

export default Validation;