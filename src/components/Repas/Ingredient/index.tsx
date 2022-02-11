const Ingredient = ({ingredient}:any) => {
  const handleMesure = () => {
    if (ingredient.liter) {
      return `${ingredient.liter} mL`
    }
    if (ingredient.weight) {
      return `${ingredient.weight} kg`
    }
    if (ingredient.quantity) {
      return `x ${ingredient.quantity}`
    }
  }
  return (
    <>
      <p>- {ingredient.name} {handleMesure()}</p>
    </>
  )
}

export default Ingredient