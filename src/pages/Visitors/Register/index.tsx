import { 
	useEffect,
	useState,
	ChangeEvent,
	FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { useFetch } from '../../../hooks/useFetch';
import { LOGIN } from '../../../stores/actions';
import { REGEX } from '../../../config/config';
import Alerts from '../../../components/Alerts';
import './index.scss';

const Register = () => {
	const user:any = useSelector((state) => state);
	const history = useHistory();
	const dispatch = useDispatch();
	const [	canBeSubmit, setCanBeSubmit ] = useState(false);

	const [userCreate, setUserCreate ] = useState(
    { 
      firstname: "",
      lastname: "",
      email: "",
      password: "",
			passwordConfirmation: ""
    }
  )
	
	useEffect(() => {
		if (user.isLogged) {
			history.push('/');
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user])

	const { error, responseData , token, post}:any = useFetch();
	
	useEffect(() => {
		if (responseData && !error) {
			const { data }:any = responseData;
			dispatch({ type: LOGIN, data, token});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [responseData]);	

	const checkEmailFormat = () => {		
		return  userCreate.email.match(REGEX) ? true : false
	}

	const checkPasswordsFormat = () => {
		const { password, passwordConfirmation } = userCreate;
		if(password.length > 6 && password === passwordConfirmation)
			return true
		else
			return false
	}
	
	useEffect(() => {		
		if(checkEmailFormat() && checkPasswordsFormat()) 
			setCanBeSubmit(true);
		else
			setCanBeSubmit(false);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [userCreate])

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();	
				
		post('/api/signup', { user: userCreate });
	}
	
	const handleChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLSelectElement> | any) => {
    setUserCreate( prevUserData => {
      const { name, value } = event.target;
      return {
        ...prevUserData,
        [name]: value
      }
    })
  }
		
	return (
			<section className="signup flex__center padding">
				<div className="bg">
					<h2>Inscription</h2>
					<div className='form-container'>
					<form className='register' onSubmit={handleSubmit}>
						<label>Votre prenom</label>
						<input 
							type="text"
							placeholder='Prenom'
							onChange={handleChange}
							name="lastname"
							value={userCreate.lastname}
							className="input"
						/>
						<label>Votre nom</label>
						<input 
							type="text"
							placeholder='Nom'
							onChange={handleChange}
							name="firstname"
							value={userCreate.firstname}
							className="input"
						/>
						<label>Votre e-mail</label>
						<input 
							type="email"
							placeholder='Email'
							onChange={handleChange}
							name="email"
							value={userCreate.email}
							className="input"
						/>	
						<label>Mot de passe</label>
						<input
							type="password"
							autoComplete='new-password' 
							placeholder='Mot de passe'
							onChange={handleChange}
							name="password"
							value={userCreate.password}
							className="input"
						/>
						<label>Mot de passe confirmation</label>
						<input 
							type="password"
							autoComplete='new-password'
							placeholder='Confirmez le mot de passe'
							onChange={handleChange}
							name="passwordConfirmation"
							value={userCreate.passwordConfirmation}
							className="input"
						/>		
						<button 
							type="submit" 
							className={`button__custom btn ${canBeSubmit ? "" : "btn-error"}`}>
								Nous rejoindre
						</button>
					</form>
					</div>
					<p className='__signup'>Deja un compte ? <Link 
						className="signup" 
						to="/login">
							Se connecter
						</Link>
					</p>
				
					{error && <Alerts type={"error"} message={error}/>}
				</div>
			</section>
	)
}

export default Register;