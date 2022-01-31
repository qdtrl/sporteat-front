import { Link } from 'react-router-dom';

const Panier = ({ panier, setPanier }) => {
  const deleteItem = (e) => {
    const id = Number(e.target.id);
    setPanier(panier.filter((item) => item.exercice_id !== id));
  }

  const handleClick = () => {
    setPanier(
      { 
        wod: 
        {
          name: "Nouvelle Seance",
          calories: 0
        },
        exercices: [...panier]
      })
  }

  return (
    <ul className="panier">
      <h3>Mon panier d'exercices : </h3>
      {panier?.map(({exercice_id, name, repetitions, rounds, weight}, index) => (
        <li id={exercice_id} key={index}>
          {name} {weight}kg <em>{repetitions}x{rounds} <button id={exercice_id} onClick={deleteItem}>-</button></em>
        </li>
      ))}
      <Link onClick={handleClick} to="/workout-of-the-day/validation" className='validate'>Aller verifier la nouvelle seance</Link>
    </ul>
  )
}

export default Panier;