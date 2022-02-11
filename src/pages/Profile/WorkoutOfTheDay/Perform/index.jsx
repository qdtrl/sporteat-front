import { useState } from 'react';
import { Link } from 'react-router-dom';
import Carrousel from '../../../../components/Carrousel';
import Timer from '../../../../components/Timer';
import './index.scss';

const Perform = ({workout}) => {
  const [time, setTime] = useState(0)
  const [play, setPlay] = useState(false);

  return (
    <>
      <Timer 
        play={play}
        setPlay={setPlay}
        time={time}
        setTime={setTime}/>
      <Carrousel exercices={workout.exercices} />
      <Link className='button__custom' to={"/workout-of-the-day/save"}>Fin de seance Aller Sauvegarder ma perfomance</Link>
    </>
  )
}

export default Perform;