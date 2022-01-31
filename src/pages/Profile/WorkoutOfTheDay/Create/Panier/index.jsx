const Panier = ({panier}) => {
  return (
    <ul className="panier">
      <h3>Mon panier à exercices : </h3>
      {panier.map(({id, name, repetitions, rounds, weight}) => (
        <li key={id}>
          {name} {weight}kg - {repetitions}x{rounds}  
        </li>
      ))}
    </ul>
  )
}

export default Panier;