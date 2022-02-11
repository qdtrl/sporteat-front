import { useState } from 'react';
import './index.scss';

const Carrousel = ({exercices}) => {
  const [indexCarroussel, setIndexCarrousel ] = useState(0);

  const handleClickLeftArrow = () => {
    if (indexCarroussel > 0)
      setIndexCarrousel(indexCarroussel - 1)
    else
      setIndexCarrousel(exercices.length - 1)
  }

  const handleClickRightArrow = () => {
    if (indexCarroussel < exercices.length - 1)
      setIndexCarrousel(indexCarroussel + 1)
    else
      setIndexCarrousel(0)
  }
  return (
    <>
      { exercices && <div className='carroussel'>
        <button className='button__custom' onClick={handleClickLeftArrow}>{'<'}</button>
        <div className='description'>
          <p>{exercices[indexCarroussel].exercice.name}</p> 
          <p>{exercices[indexCarroussel].equipement.name}</p>
          <p> 
            {exercices[indexCarroussel].performance.repetitions} reps X {exercices[indexCarroussel].performance.rounds} trs
          </p>
          <p>{exercices[indexCarroussel].performance.poids}</p> 
        </div>
        <button className='button__custom' onClick={handleClickRightArrow}>{'>'}</button> 
      </div>}
    </>
  )
}

export default Carrousel;