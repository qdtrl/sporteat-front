const Menu = ({ exercices, weights, userChoices, setUserChoices }) => {
	
	return (
		<div className="menu">
		{
			exercices?.map((exercice, index) => (
				<div 
					key={index} 
					className="choice" 
					onClick={()=>{setUserChoices({...userChoices, exercice_id: exercice.id })}} >
					{ exercice.name }
				</div>
			))
		}
		</div>
	)
}
export default Menu;