import { useEffect,useState } from 'react';
import { useFetch } from '../../../../hooks/useFetch';
import Panier from '../Create/Panier';
import ShowExercices from '../Create/ShowExercices';

const Flow = () => {
  const { responseData:data, get} = useFetch(true);
  const [exerciceType, setExerciceType] = useState(false);
  const [reload, setReload] = useState(false);
  const [panier, setPanier] = useState([])

  const handleOnClick = (e) => {
    setExerciceType(0);
    setExerciceType(e.target.name)
  }
  useEffect(() => {
    if (exerciceType)
      get(`/exercices/workout`)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciceType, reload]);

  const AddExercice = (exo) => {
    setPanier([...panier, exo]);
  }

  useEffect(() => {
    console.log(panier);
  }, [panier]);

  return (
    <>
      <Panier panier={panier} setPanier={setPanier}/>
      <button name="upper-body" onClick={handleOnClick}>Haut du corps</button>
      <button name="lower-body" onClick={handleOnClick}>Bas du corps</button>
      <button name="hit" onClick={handleOnClick}>Cardio</button>
      <button name="gymnastic" onClick={handleOnClick}>Gymnastique</button>
      {data && <ul className='list exercices'>
        <ShowExercices equipement={data.equipement} exercice={data.exercice} performance={data.performance} AddExercice={AddExercice} /> 
      </ul>}
      { exerciceType && <button onClick={() => setReload(!reload)}>Autre exercice de {exerciceType}</button>}
    </>
  )
}

export default Flow;