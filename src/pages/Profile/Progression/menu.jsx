const Menu = (props) => {
	console.log(props);
	return (
		<div className="menu">
		{
			props.exos?.map((exo, index) => (
				<div key={index} className="choice" onClick={()=>{props.update(exo.id)}} >
					{
						exo.name
					}
				</div>
			))
		}
		</div>
	)
}
export default Menu;