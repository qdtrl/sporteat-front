import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useFetch } from "../../../../../hooks/useFetch";
import ShowExercices from '../../../../../components/ShowExercices';

const Improve = () => {
  const { responseData:data, get} = useFetch(true);
  
  useEffect(() => {
    get(`/wods`)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <ul className='list wods'>
        {data?.map(({wod, exercices}) => (
          <li>
            <h2>{wod.name}</h2>
            <p>{wod.calories}</p>
            { exercices.map(({equipement, exercice, performance}) => (
              <ShowExercices equipement={equipement} exercice={exercice} performance={performance} />
            ))}
            <Link to="/workout-of-the-day/validation" className='validate'>Aller valider le panier</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Improve;