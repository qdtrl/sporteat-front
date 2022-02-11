import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MdAddShoppingCart } from 'react-icons/md'
import './index.scss';

const ShowExercices = ({exercice, performance, equipement, AddExercice, index}) => {
  const location = useLocation().pathname;
  const [exo, setExo] = useState()
  
  useEffect(() => {
    setExo(
    {
      equipement: { 
        id: equipement.id,
        name: equipement.name,
        weight: equipement.weight
      },
      exercice: {
        id: exercice.id,
        name: exercice.name,
        categorie: exercice.categorie
      },
      performance: {
        id: performance.id,
        repetitions: performance.repetitions || 1,
        rounds: 1,
        weight: performance.weight || equipement.weight
      }
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exercice]);

  const handleSubmit = (e) => {
    e.preventDefault();
    AddExercice(exo);
  }

  const handleChange = (e) => {
    e.preventDefault();
    const {name, value} = e.target;
    setExo({...exo, performance: { ...exo.performance ,[name]: Number(value) } })
  }
  
  return (
    <>
      {exo &&
      <li className='exercice' key={exercice.id} id={exercice.id}>
        { location !== "/workout-of-the-day/choose/create" ? equipement.name : ""} {exercice.name} 
        <form onSubmit={handleSubmit}>
          { exercice.equipement_id !== 1 && 
          <div className='duo'>
            <label>poids</label>
            <input 
              type="number"
              name="weight"
              onChange={handleChange}
              value={exo.performance.weight}
              min="0"/>
          </div>}
          <div className='duo'>
            <label>repetitions</label>
            <input 
              type="number"
              name="repetitions"
              onChange={handleChange}
              value={exo.performance.repetitions}
              min="1"/>
          </div>
          <div className='duo'>
            <label>tours</label>
            <input 
              type="number" 
              name="rounds" 
              onChange={handleChange}
              value={exo.performance.rounds}
              min="1"/>
          </div>
          { AddExercice ? <button type="submit"><MdAddShoppingCart className='addtoshop' /></button> : "" }
        </form>
      </li>}
    </>
  )
}

export default ShowExercices;
