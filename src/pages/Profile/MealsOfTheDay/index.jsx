import { useEffect } from 'react';
import { useFetch } from '../../../hooks/useFetch'
import Menu from '../../../components/Repas';
import Loader from '../../../components/Loader';
import './index.scss';

const MealsOfTheDay = () => {
  const { isLoading, responseData:Mod , get} = useFetch(true);

  useEffect(() => {
    if(!Mod){
        get("/mods")
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Mod])
  
  return (
    <>
      <div className="menu-of-the-day flex__profile"> 
      { (!Mod && isLoading) && <Loader/>}
      { Mod && <>
        <h1>Menus du jour</h1>
        <p>Objectif de la journée : {Mod.calories} calories</p> 
          { Mod.meals.map((meal, index) => (
            <Menu
                meal={meal}
                key={index}
              />
          ))}
          </>}
      </div>
    </>
  )
}

export default MealsOfTheDay;