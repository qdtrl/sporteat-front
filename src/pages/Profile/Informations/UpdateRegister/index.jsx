import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFetch } from '../../../../hooks/useFetch';
import { UPDATE } from '../../../../stores/actions';
import { REGEX } from '../../../../config/config';
import Alerts from '../../../../components/Alerts';

const UpdateRegister = () => {
	const dispatch = useDispatch();
	const user = useSelector((state) => state);
	const [canBeSubmit, setCanBeSubmit] = useState(false);
	console.log('t',user);
	const [userData, setUserData] = useState(
		{ 
			firstname: undefined,
			lastname: undefined,
			email: undefined,
		})

	useEffect(() => {
		if(!userData.firstname && user.email)
			setUserData(user)
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user])

	const { error, responseData, patch} = useFetch(true);

	const checkEmailFormat = () => {
		if (!userData.email)
			return false		
		return  userData.email.match(REGEX) ? true : false
	}
	
	useEffect(() => {		
		if(checkEmailFormat()) 
			setCanBeSubmit(true);
		else
			setCanBeSubmit(false);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [userData])

	const handleSubmit = (event) => {
		event.preventDefault();	
		patch(`/api/users/${user.id}`, { user: userData })	
	}

	useEffect(() => {
		if (responseData && !error) {
			dispatch({ type: UPDATE, data:responseData});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [responseData]);	

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
			<h2>Modifier mes paramètres</h2>
			<form onSubmit={handleSubmit}>
				<div className="form-container">
					<div className="half">
						<div className='field'>
							<input 
								type="text"
								placeholder=' Prenom'
								onChange={handleChange}
								name="lastname"
								value={userData.lastname}
								className="input"
							/>
						</div>
					</div>
					<div className="half">
						<div className='field'>
							<input 
								type="text"
								placeholder=' Nom'
								onChange={handleChange}
								name="firstname"
								value={userData?.firstname}
								className="input"
							/>	
						</div>						
					</div>
				</div>
				<div className="form-container">
					<div className="full">
						<div className='field'>
							<input 
								type="email"
								placeholder=' Email'
								onChange={handleChange}
								name="email"
								value={userData?.email }
								className="input"
							/>	
						</div>						
					</div>
				</div>
				<div className="btn-container">
					<button 
						type="submit" 
						className={`btn ${canBeSubmit ? "" : "btn-error"}`}>
							Modifier
					</button>
				</div>
			</form>
			{(responseData && !error) && <Alerts type={"success"} message={"Les paramètres ont été modifiés"}/> }

			{error && <Alerts type={"error"} message={error}/>}
		</>
	)
}

export default UpdateRegister;