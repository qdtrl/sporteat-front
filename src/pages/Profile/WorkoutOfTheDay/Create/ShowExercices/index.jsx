import { useState } from 'react';

const ShowExercices = ({exercice, performance, AddExercice, index}) => {
  const [exo, setExo] = useState({
    exercice_id: exercice.id,
    name: exercice.name,
    repetitions: performance.repetitions || 1,
    rounds: 1,
    weight: performance.weight || 1
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(exo);

    AddExercice(exo)
  }

  const handleChange = (e) => {
    const {name, value} = e.target;
    setExo({...exo, [name]: value})
  }
  
  return (
      <li key={exercice.id} id={exercice.id} onClick={AddExercice}>
        {exercice.name}
        <form onSubmit={handleSubmit}>
          { exercice.equipement_id !== 1 && <><label>poids</label>
          <input 
            type="number"
            name="weight"
            onChange={handleChange}
            value={exo.weight}
            min="0"/></>}
          <label>repetitions</label>
          <input 
            type="number"
            name="repetitions"
            onChange={handleChange}
            value={exo.repetitions}
            min="1"/>
          <label>tours</label>
          <input 
            type="number" 
            name="rounds" 
            onChange={handleChange}
            value={exo.rounds}
            min="1"/>
          <button type="submit">+</button>
        </form>
      </li>
  )
}

export default ShowExercices;
