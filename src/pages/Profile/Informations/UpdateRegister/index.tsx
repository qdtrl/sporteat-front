import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFetch } from '../../../../hooks/useFetch';
import { UPDATE } from '../../../../stores/actions';
import {Field} from '../../../../components/Fields';
import { REGEX } from '../../../../config/config';
import Alerts from '../../../../components/Alerts';

const UpdateRegister = () => {
	const dispatch = useDispatch();
	const user:any = useSelector((state) => state);
	
	const [email, setEmail] = useState();
	const [firstname, setFirstname] = useState();
	const [lastname, setLastname] = useState();
	const { error, responseData:data, patch} = useFetch(true);

	useEffect(() => {
		if (user.firstname) {
			setEmail(user.email)
			setFirstname(user.firstname)
			setLastname(user.lastname)
		}

	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user])


	const handleSubmit = (e:any) => {
		e.preventDefault();	
		const updateUser = {
			user: {
				firstname: e.target.firstname.value,
				lastname: e.target.lastname.value,
				email: e.target.email.value,
				// password: e.target.password.value,
			}
		};

		patch('/api/users/2', updateUser);

	}

	useEffect(() => {
		if (data && !error) {
			dispatch({ type: UPDATE, data});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data]);	

	const [emailError, setEmailError] = useState("");

	const handleOnChange = (e:any) => {
		switch (e.target.name) {
			case "firstname" : 
				setFirstname(e.target.value);
				break;
			case "lastname" : 
				setLastname(e.target.value);
				break;
			case "email" : 
				setEmail(e.target.value);
				if(!e.target.email.value.match(REGEX)){
					setEmailError("Veuillez renseigner un e-mail valide.");
				} else {
					setEmailError("");
				}
				break;
			default : break;
		}
	
	};

	
	return (
		<>
			<h2>Modifier mes paramètres</h2>
			<form onSubmit={handleSubmit} onChange={handleOnChange}>
				<div className="form-container">
					<div className="half">
						<Field label="Prénom" name="firstname" value={firstname}/>
					</div>
					<div className="half">
						<Field label="Nom" name="lastname" value={lastname}/>
					</div>
				</div>
				<div className="form-container">
					<div className="full">
						<Field label="Email" name="email" value={email} error={emailError} />
					</div>
				</div>
				{/* <div className="form-container">
					<div className="half">
						<Field label="Mot de passe" password name="password" value={password} change={updatePassword} error={passwordError}  />
					</div>
					<div className="half">
						<Field label="Confirmation du mot de passe" password value={passwordConfirmation} change={updatePasswordConfirmation} error={passwordConfirmationError}/>
					</div>
				</div> */}
					
				<div className="btn-container">
					<button type="submit" className={`btn ${
						emailError?
						// ||
						// passwordError||
						// passwordConfirmationError?
						"btn-error"
						:
						""
					}`}>Modifier</button>
				</div>   
			</form>
			{(data && !error) && <Alerts type={"success"} message={"Les paramètres ont été modifiés"}/> }

			{error && <Alerts type={"error"} message={error}/>}
		</>
	)
}

export default UpdateRegister;