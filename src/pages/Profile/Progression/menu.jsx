const Menu = ({ exercices, weights, userChoices, setUserChoices }) => {
	return (
		<div className="menu">
			<div>
				<label htmlFor='exercice'> L'exercice ? </label>
				<br/>
				{ exercices?.map((exercice, index) => (
						<div
							key={index}
							className="choice"
							onClick={()=>{setUserChoices({...userChoices, exercice_id: exercice.id })}}>
							{ exercice.name }
						</div>
				))}
			</div>
			<div>
				<label htmlFor='select'> Repetitions / Poids ? </label>
				<br/>
				<select
					id="select"
					value={userChoices.select}
					onChange={(event)=>{setUserChoices({...userChoices, select: event.target.value })}}
					name="select">
					<option value="repetitions">Repetitions</option>
					<option value="weight">Poids</option>
				</select>
			</div>
			<div>
				{ userChoices.select === 'weight' ? 
				  weights?.map((weight, index) => (
						<div
							key={index}
							className="choice"
							onClick={()=>{setUserChoices({...userChoices, weight: weight })}}>
							{ weight }
						</div> )): "" }
			</div>
		</div>
	)
}

export default Menu;