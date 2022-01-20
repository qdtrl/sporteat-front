import { 
	useEffect,
	useState,
	ChangeEvent,
	FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { LOGIN } from '../../stores/actions';
import {Field} from '../../components/Fields';
import { REGEX } from '../../config/config';
import { Link } from "react-router-dom";
import Alerts from '../../components/Alerts';

const Register = () => {
	const user:any = useSelector((state) => state);
	const history = useHistory();
	const dispatch = useDispatch();

	const [userCreate, setUserCreate ] = useState(
    { 
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    }
  )
	
	useEffect(() => {
		if (user.isLogged) {
			history.push('/');
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user])

	const { error, responseData , token, post} = useFetch();
	
	useEffect(() => {
		if (responseData && !error) {
			const { data }:any = responseData;
			dispatch({ type: LOGIN, data, token});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [responseData]);	

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();	
		
		post('/api/signup', userCreate);
	}
	
	const handleChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLSelectElement> | any) => {
    setUserCreate( prevUserData => {
      const { name, value, type } = event.target;
      return {
        ...prevUserData,
        [name]: type === value
      }
    })
  }
	// const [emailError, setEmailError] = useState("");
	// const emailUpdate = (e:any) => {
	// 	if(!e.target.value.match(REGEX)){
	// 		setEmailError("Veuillez renseigner un e-mail valide.");
	// 	} else {
	// 		setEmailError("");
	// 	}
	// }

		// if(e.target.value.length < 6){
		// 	setPasswordError("Veuillez renseigner un mot de passe d'au moins 6 caractères");
		// } else {
		// 	setPasswordError("");
		// }		
	// const [passwordConfirmation, setPasswordConfirmation] = useState("");
	// const [passwordConfirmationError, setPasswordConfirmationError] = useState("");
	// const updatePasswordConfirmation = (e:any) => {
	// 	setPasswordConfirmation(e.target.value);
	// 	if(e.target.value !== password){
	// 		setPasswordConfirmationError("Le mot de passe et sa confirmation doivent être identiques");
	// 	} else {
	// 		setPasswordConfirmationError("");
	// 	}
		
	return (
			<section className="signup-form">
				<div className="signup-container">
					<h2>Inscription</h2>
					<form onSubmit={handleSubmit}>
						<div className="form-container">
							<div className="half">
								<input 
									type="text"
									placeholder='LastName'
									onChange={handleChange}
									name="lastName"
									value={userCreate.lastName}
								/>
							</div>
							<div className="half">
								<input 
									type="text"
									placeholder='FirstName'
									onChange={handleChange}
									name="firstName"
									value={userCreate.firstName}
								/>							
							</div>
						</div>
						<div className="form-container">
							<div className="full">
								<input 
									type="email"
									placeholder='Email'
									onChange={handleChange}
									name="email"
									value={userCreate.email}
								/>							
							</div>
						</div>
						<div className="form-container">
							<div className="half">
								<input 
									type="password"
									placeholder='Mot de passe'
									onChange={handleChange}
									name="password"
									value={userCreate.password}
								/>						
							</div>
							<div className="half">
								<input 
									type="password"
									placeholder='Mot de passe'
									onChange={handleChange}
									name="password"
									value={userCreate.password}
								/>						
							</div>
						</div>
						<div className="btn-container">
							<button type="submit" className={`btn ${
								false?
								"btn-error"
								:
								""
							}`}>S'inscrire</button>
						</div>
						<div className="link-already-signup">
							<Link to="/login">
								J'ai déjà un compte !
							</Link>
						</div>     
					</form>
					{error && <Alerts type={"error"} message={error}/>}
				</div>

			</section>
	)
}

export default Register;