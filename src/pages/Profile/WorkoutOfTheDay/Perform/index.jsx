import { useState } from 'react';
import Carrousel from '../../../../components/Carrousel';
import Timer from '../../../../components/Timer';

const Perform = ({panier}) => {
  const [time, setTime] = useState(0)
  const [play, setPlay] = useState(false);

  return (
    <>
      <Timer 
        play={play}
        setPlay={setPlay}
        time={time}
        setTime={setTime} />
      <Carrousel exercices={panier.exercices} />
    </>
  )
}

export default Perform;