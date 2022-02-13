import { useEffect,useState } from 'react';
import { useFetch } from '../../../../../hooks/useFetch';
import Cart from '../../../../../components/Cart';
import ShowExercices from '../../../../../components/ShowExercices';
import Loader from '../../../../../components/Loader';
import './index.scss';

const Flow = ({ workout, saveWorkout }) => {
  const { isLoading, responseData:data, get} = useFetch(true);
  const [exerciceType, setExerciceType] = useState(false);
  const [reload, setReload] = useState(false);

  const handleOnClick = (e) => {
    setExerciceType(e.target.name)
  }

  useEffect(() => {
    saveWorkout({...workout, wod: { id: 0, name: "Nouvelle Seance", calorie: 0 }})
    if (exerciceType)
      get(`/exercices/workout`)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciceType, reload]);

  const AddExercice = (exo) => {
    const {wod, exercices} = workout;
    saveWorkout({ wod, exercices: [...exercices, exo]});
  }

  return (
    <>
      <Cart workout={workout} saveWorkout={saveWorkout}/>
      <div className='flow__buttons'>
        <button className='button__custom' name="upper-body" onClick={handleOnClick}>Haut du corps</button>
        <button className='button__custom' name="lower-body" onClick={handleOnClick}>Bas du corps</button>
        <button className='button__custom' name="hit" onClick={handleOnClick}>Cardio</button>
        <button className='button__custom' name="gymnastic" onClick={handleOnClick}>Gymnastique</button>
      </div>
      { isLoading && <Loader /> }
      {(data && !isLoading ) && <ul className='list exercices'>
        <ShowExercices 
          equipement={data.equipement} 
          exercice={data.exercice} 
          performance={data.performance} 
          AddExercice={AddExercice} /> 
      </ul>}
      { exerciceType && <button className='button__custom flow-another' onClick={() => setReload(!reload)}>
          Autre exercice de {exerciceType}
        </button>}
    </>
  )
}

export default Flow;