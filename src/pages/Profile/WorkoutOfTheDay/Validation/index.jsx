import { Link } from 'react-router-dom';
import './index.scss';

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
    <section className='validation-workout flex__profile'>
      <h1>Verifier la seance !</h1>
      <Link className='button__custom' to="/workout-of-the-day/choose">Retourner choisir</Link>
      { workout.exercices.length !== 0 && <div>
        <h2>{workout.wod?.name} - {workout.wod?.calories} calories</h2>
        <h3>L'équipement necessaire</h3>
        <ul>
        { workout?.exercices?.map(({equipement}, index) => (
          <li className='equipement' key={index}>{equipement.name}</li>
        ))}
        </ul>
        <h3>Les exercices</h3>
        <ul>
        { workout?.exercices?.map(({equipement, exercice, performance}, index) => (
          <li className='exercice' id={index} key={index}>
            <p>{exercice.name}</p>
            {equipement.id !== 1 && <div className='duo'><label>poids</label>
            <input
              id={index} 
              type="number"
              name="weight"
              onChange={handleChange}
              value={performance.weight}
              min="0"/></div>}
            <div className='duo'>
              <label>repetitions</label>
              <input
                id={index}
                type="number"
                name="repetitions"
                onChange={handleChange}
                value={performance.repetitions}
                min="1"/>
            </div>
            <div className='duo'>
              <label>tours</label>
              <input 
                id={index}
                type="number" 
                name="rounds" 
                onChange={handleChange}
                value={performance.rounds}
                min="1"/>
            </div>
          </li>
        ))}
        </ul>
        { workout.exercices.length !== 0 && <Link className='button__custom' to="/workout-of-the-day/perform">C'est parti !</Link> }
      </div> }
    </section>
  )
}

export default Validation;