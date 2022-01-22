import { useEffect } from 'react';
import { useFetch } from '../../../hooks/useFetch'
import Menu from '../../../components/Repas';


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
      { (!Mod && isLoading) && <p>2 sec ça charge</p>}
      { Mod && 
      <div className="menu-of-the-day"> 
      <h1>Menus du jour</h1>
        <p>Objectif de la journée : {Mod.calories} calories</p> 
          { Mod.meals.map((meal, index) => (
            <Menu
                meal={meal}
                key={index}
              />
          ))}
      </div>
}
    </>
  )
}

export default MealsOfTheDay;