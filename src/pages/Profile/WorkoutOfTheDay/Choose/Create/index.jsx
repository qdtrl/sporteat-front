import { useEffect, useState } from 'react';
import { useFetch } from '../../../../../hooks/useFetch';
import Panier from '../../../../../components/Panier';
import ShowExercices from '../../../../../components/ShowExercices';

const Create = () => {
  const { responseData:data, get} = useFetch(true);
  const [indexShowExercices, setIndexShowExercices] = useState(false);
  const [panier, setPanier] = useState([])

  useEffect(() => {
    get("/exercices")
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
    setPanier([...panier, exo]);
  }

  return (
    <>
      <Panier panier={panier} setPanier={setPanier}/>
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
          <ShowExercices key={index} exercice={exercice} performance={performance} AddExercice={AddExercice} index={index}/> 
        ))}
      </ul> }
    </>
  )
}

export default Create;