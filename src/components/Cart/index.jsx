import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdDeleteForever, MdShoppingCart } from 'react-icons/md';
import './index.scss';

const Cart = ({ workout, saveWorkout }) => {
  const [toggleCart, setToggleCart] = useState(false);
  const deleteAllItem = () => {
    saveWorkout({ ...workout, exercices: []}); 
  }

  const deleteItem = (e) => {
    const id = Number(e.target.id);
    const exercices = workout.exercices.filter((item) => item.exercice.id !== id);
    saveWorkout({ ...workout, exercices: exercices});
  }

  return (
    <>
    <ul className="cart">
      <h3>Mon panier d'exercices:</h3>
      {workout.exercices?.map(({exercice, performance, equipement}, index) => (
        <li id={exercice.id} key={index}>
          {exercice.name} {equipement.weight === 0 ? "" : `${performance.weight}kg`} {performance.repetitions}x{performance.rounds} <button id={exercice.id} onClick={deleteItem}><MdDeleteForever/></button>
        </li>
      ))}
      <div className='buttons'>
        <Link to="/workout-of-the-day/validation" className='button__custom check'>Aller Valider</Link>
        <button className='button__custom delete' onClick={deleteAllItem}>Reset</button>
      </div>
    </ul>
    <ul className="cart__mobile">
      <MdShoppingCart className='cart-logo' onClick={() => setToggleCart(!toggleCart)}/>
      { toggleCart &&
      <div className="overlay flex__center slide__left">
      	<div className="overlay__close slide__left__quit" onClick={() => setToggleCart(false)}>X</div>
        <h3>Mon panier d'exercices : </h3>
        {workout.exercices?.map(({exercice, performance, equipement}, index) => (
          <li id={exercice.id} key={index}>
            <p>{exercice.name}</p>
            <p>{equipement.weight === 0 ? "" : `${performance.weight}kg`}</p>  
            <p>{performance.repetitions}x{performance.rounds}</p>
            <button id={exercice.id} onClick={deleteItem}><MdDeleteForever/></button>
          </li>
        ))}
        <div className='buttons'>
          <Link to="/workout-of-the-day/validation" className='button__custom check'>Aller Valider</Link>
          <button className='button__custom delete' onClick={deleteAllItem}>Reset</button>
        </div>
      </div>
      }
    </ul>
    </>
  )
}

export default Cart;