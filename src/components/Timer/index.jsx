import { useState, useEffect } from 'react';

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
    <>
      <h2>{time}</h2>
      <h2>
        {minutes > 9 ? minutes : `0${minutes}`}:
        {secondes > 9 ? secondes : `0${secondes}`}
      </h2>
      <button onClick={() => setPlay(!play)} >
          { play ? "Pause" : "Start"}
        </button>
        <button onClick={handleReset} >
          Reset
        </button>
    </>
  )
}

export default Timer;