import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useFetch } from "../../../../../hooks/useFetch";
import ShowExercices from '../../../../../components/ShowExercices';

const Improve = ({ saveWorkout }) => {
  const { responseData:data, get} = useFetch(true);
  
  useEffect(() => {
    get(`/wods`)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = (e) => {
    const index = e.target.id;
    const { wod, exercices } = data[index];
    localStorage.removeItem('workout-cart');
    saveWorkout({wod, exercices});
  }

  return (
    <>
      <ul className='list wods'>
        {data?.map(({wod, exercices}, index) => (
          <div key={index}>
            <h2>{wod.name}</h2>
            <p>{wod.calories}</p>
            { exercices.map(({equipement, exercice, performance}, index) => (
              <ShowExercices
                key={index}
                equipement={equipement}
                exercice={exercice}
                performance={performance}/>
            ))}
            <Link 
              id={index} 
              onClick={handleClick} 
              to="/workout-of-the-day/perform" 
              className='validate'>
                Refaire cette seance
            </Link>
          </div>
        ))}
      </ul>
    </>
  )
}

export default Improve;