import { useState, useEffect } from 'react';
import { 
  MdPlayArrow,
  MdPause,
  MdReplay } from 'react-icons/md';
import './index.scss';

const Timer = ({play, time, setTime, setPlay}) => {
  const [secondes, setSecondes] = useState(0);
  const [minutes, setMinutes] = useState(0);
  
  useEffect(() => {
    if(time === 60) {
      setTime(0)
      setSecondes(0)
      setMinutes(minutes + 1)
    } else
      setSecondes(time)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time])

  useEffect(() => {
    let interval = null;
    if (play) {
      interval = setInterval(() => {
        setTime(time + 1);
    }, 1000);
    } else if (!play) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [play, time]);

  const handleReset = () => {
    setTime(0)
    setMinutes(0)
    setSecondes(0)
    setPlay(false)
  }
  return (
    <div className='timer'>
      <p>
        {minutes > 9 ? minutes : `0${minutes}`}:
        {secondes > 9 ? secondes : `0${secondes}`}
      </p>
      <div className='controls__timer'>
        <button onClick={() => setPlay(!play)} >
          { play ? <MdPause className='pause'/> : <MdPlayArrow className='play'/>}
        </button>
        <button onClick={handleReset} >
          <MdReplay className='reset'/>
        </button>
      </div>
    </div>
  )
}

export default Timer;