import Ingredient from './Ingredient';

const Menu = ({meal}:any) => {
  const {title, name, calories, ingredients } = meal
  
  const handleTitle = () => {
    switch (title) {
      case "breakfast": 
      return "Petit-déjeuner"
      case "lunch": 
      return "Déjeuner"
      case "dinner": 
      return "Diner"
    }
  }

  return (
    <div className="menu">
      <h2>{handleTitle()}</h2>
      <h3>{name}</h3>
      <span>{calories} calories</span>
      <div className="ingredients"> 
        { ingredients.map((ingredient:any, index:number) => (
          <Ingredient
              ingredient={ingredient}
              key={index}
            />
        ))}
      </div>
    </div>
  )
}

export default Menu;