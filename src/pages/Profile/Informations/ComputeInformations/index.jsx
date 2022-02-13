import { 
	useEffect,
	useState } from 'react';
import { useSelector } from 'react-redux';
import { useFetch } from '../../../../hooks/useFetch';
import Alerts from '../../../../components/Alerts'
import './index.scss';

const ComputeInformations = () => {
	const user = useSelector((state) => state);
	const { responseData, get} = useFetch(true);
	const [firstTime, setFirstTime] = useState(true);
	const [canBeSubmit, setCanBeSubmit] = useState(false);
	const [ userData, setUserData ] = useState(
		{
			sexe: "",
			age: "",
			height: "",
			weight: "",
			activity: "",
			objectif: "",
	})

	useEffect(() => {
		if( userData.activity === "" || userData.objectif === ""
			|| (userData.height < 1 || userData.height > 2.5)
			|| (userData.weight < 20 || userData.weight > 200)
			|| userData.age < 12 ) {
			setCanBeSubmit(false)
		}
		else
			setCanBeSubmit(true)
	}, [userData])

	useEffect(() => {
		get(`/api/users/${user.id}`)
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	useEffect(() => {
		if (!responseData?.data?.attributes)  {
			return
		}
		setUserData(responseData.data.attributes);
	}, [responseData])
	
	const { patch, isLoading} = useFetch(true);

	
	const handleSubmit = (event) => {
		event.preventDefault();	
		setFirstTime(false);
		patch(`/api/users/${user.id}`, { user: userData })	
	}

	const handleChange = (event) => {
    setUserData( prevUserData => {
      const { name, value } = event.target;
      return {
        ...prevUserData,
        [name]: value
      }
    })
  }

	return (
		<>
			<h2>{firstTime ? "Rentrer" : "Modifier"} les champs pour les calculs des repas</h2>
			<form className='compute' onSubmit={handleSubmit}>
					<div className='half'>
						<label htmlFor='age'> Votre âge ?</label>
						<input 
							id="age"
							type="number"
							placeholder=' Age'
							onChange={handleChange}
							name="age"
							value={userData.age}
							className="input"
						/>
					</div>
					<div className='half'>
						<label htmlFor='sexe'> Vous êtes... ? </label>
						<select
							id="sexe"
							value={userData.sexe}
							onChange={handleChange}
							name="sexe"
						>
							<option value="">--Choisie ton sexe--</option>
							<option value="man">Homme</option>
							<option value="woman">Femme</option>
						</select>
					</div>
					<div className='half'>
						<label htmlFor='height'> Votre taille (m)? </label>
						<input 
							id="heigt"
							type="number"
							placeholder=' Taille'
							onChange={handleChange}
							name="height"
							value={userData.height}
							className="input"
						/>
					</div>
					<div className='half'>
						<label htmlFor='weight'> Votre poids (kg)? </label>
						<input 
							id="weight"
							type="number"
							placeholder=' Poids'
							onChange={handleChange}
							name="weight"
							value={userData.weight}
							className="input"
						/>
					</div>
					<div className='half'>
						<label htmlFor='activityType'>Etes-vous plutôt... ?</label>
						<select
							id="activityType"
							value={userData.activity}
							onChange={handleChange}
							name="activity"
						>
							<option value="">--Choisie ton niveau d'activite--</option>
							<option value="sedentary">Sédentaire</option>
							<option value="active">Actif</option>
							<option value="athletic">Athletique</option>
						</select>
					</div>
					<div className='half'>
						<label htmlFor='objectif'> Quel est votre objectif ? </label>
						<select
							id="objectif"
							value={userData.objectif}
							onChange={handleChange}
							name="objectif"
						>
							<option value="">--Choisie ton objectif--</option>
							<option value="slim">Perte de poids</option>
							<option value="maintain">Maintenir sa forme</option>
							<option value="build">Se muscler</option>
						</select>
					</div>
			</form>
			<button 
				type="submit" 
				className={`button__custom btn ${canBeSubmit ? "" : "btn-error"}`}>
				{ firstTime ? "Valider" : "Modifier" }
			</button>
			{isLoading && 
			<Alerts type={"success"} message={"Les paramètres ont été modifiés"}/>}
		</>
	)
}

export default ComputeInformations;