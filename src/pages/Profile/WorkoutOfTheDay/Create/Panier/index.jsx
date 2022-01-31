const Panier = ({ panier, setPanier }) => {
  const deleteItem = (e) => {
    const id = Number(e.target.id);
    setPanier(panier.filter((item) => item.exercice_id !== id));
  }

  return (
    <ul className="panier">
      <h3>Mon panier à exercices : </h3>
      {panier.map(({exercice_id, name, repetitions, rounds, weight}, index) => (
        <li id={exercice_id} key={index}>
          {name} {weight}kg <em>{repetitions}x{rounds} <button id={exercice_id} onClick={deleteItem}>-</button></em>
        </li>
      ))}
    </ul>
  )
}

export default Panier;