import { Link } from 'react-router-dom';

const Cart = ({ workout, saveWorkout }) => {
  const deleteAllItem = () => {
    saveWorkout({ ...workout, exercices: []}); 
  }

  const deleteItem = (e) => {
    const id = Number(e.target.id);
    const exercices = workout.exercices.filter((item) => item.exercice.id !== id);
    saveWorkout({ ...workout, exercices: exercices});
  }

  return (
    <ul className="panier">
      <h3>Mon panier d'exercices : </h3>
      <button onClick={deleteAllItem}>Del All</button>
      {workout.exercices?.map(({exercice, performance, equipement}, index) => (
        <li id={exercice.id} key={index}>
          {exercice.name} {equipement.weight === 0 ? "" : `${performance.weight}kg`} <em>{performance.repetitions}x{performance.rounds} <button id={exercice.id} onClick={deleteItem}>-</button></em>
        </li>
      ))}
      <Link to="/workout-of-the-day/validation" className='validate'>Aller verifier la nouvelle seance</Link>
    </ul>
  )
}

export default Cart;