import { useEffect, useState } from 'react';
import { useFetch } from '../../../../../hooks/useFetch';
import Cart from '../../../../../components/Cart';
import ShowExercices from '../../../../../components/ShowExercices';

const Create = ({ workout, saveWorkout }) => {
  const { responseData:data, get} = useFetch(true);
  const [indexShowExercices, setIndexShowExercices] = useState(false);

  useEffect(() => {
    get("/exercices")
    saveWorkout({...workout, wod: { id: 0, name: "Nouvelle Seance", calorie: 0 }})
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClickOnEquipement = (e) => {
    const id = e.target.id;
    if (id === indexShowExercices)
      setIndexShowExercices(false)
    else
      setIndexShowExercices(id)
  }

  const AddExercice = (exo) => {
    const {wod, exercices} = workout;
    saveWorkout({ wod, exercices: [...exercices, exo]});
  }

  return (
    <>
      <Cart workout={workout} saveWorkout={saveWorkout}/>
      <ul className='list equipements'>
      {data?.map(({equipement}, index) => (
        <li id={index} key={index} onClick={handleClickOnEquipement}>
          {equipement.name}
        </li>
      ))}
      </ul>
      { indexShowExercices && 
      <ul className="list exercices">
        {data[indexShowExercices].exercices.map(({exercice, performance}, index) => (
          <ShowExercices 
            key={index} 
            equipement={data[indexShowExercices].equipement} 
            exercice={exercice} performance={performance} 
            AddExercice={AddExercice} 
            index={index}/> 
        ))}
      </ul> }
    </>
  )
}

export default Create;