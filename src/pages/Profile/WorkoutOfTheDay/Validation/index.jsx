import { useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { useFetch } from '../../../../hooks/useFetch';

const Validation = ({panier, setPanier}) => {
  // const { responseData:data, post} = useFetch(true);
  const handleChange = (e) => {
    
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = Number(e.target.id);
    setPanier(panier.filter((item) => item.exercice_id !== id));
  }

  useEffect(() => {
    console.log(panier);
  }, [panier])

  return (
    <>
      <h1>Verifier la seance !</h1>
      <div>
        <Link to="/workout-of-the-day/choose">Retourner choisir d'autres exercices</Link>
        { panier.length !== 0 && <Link to="/workout-of-the-day/perform">C'est parti !</Link> }
      </div>
      { panier.length !== 0 && <div>
        <h2>{panier.wod?.name} - {panier.wod?.calories} calories</h2>
        <h3>L'équipement necessaire</h3>
        <ul>
        { panier?.exercices?.map(({equipement_name}, index) => (
          <li key={index}>{equipement_name}</li>
        ))}
        </ul>
        <h3>Les exercices</h3>
        <ul>
        { panier?.exercices?.map(({equipement_id, exercice_id, name, rounds, repetitions, weight}, index) => (
          <li key={index}>
            {name}
            <form id={exercice_id} onSubmit={handleSubmit}>
              { equipement_id !== 1 && <><label>poids</label>
              <input 
                type="number"
                name="weight"
                onChange={handleChange}
                value={weight}
                min="0"/></>}
              <label>repetitions</label>
              <input 
                type="number"
                name="repetitions"
                onChange={handleChange}
                value={repetitions}
                min="1"/>
              <label>tours</label>
              <input 
                type="number" 
                name="rounds" 
                onChange={handleChange}
                value={rounds}
                min="1"/>
              <button type="submit">-</button> 
            </form>
          </li>
        ))}
        </ul>
        <Link to="/workout-of-the-day/perform">C'est parti !</Link>
      </div> }
    </>
  )
}

export default Validation;