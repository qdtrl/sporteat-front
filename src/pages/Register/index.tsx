import { 
	useEffect,
	useState,
	ChangeEvent,
	FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { LOGIN } from '../../stores/actions';
import { REGEX } from '../../config/config';
import Alerts from '../../components/Alerts';

const Register = () => {
	const user:any = useSelector((state) => state);
	const history = useHistory();
	const dispatch = useDispatch();
	const [	canBeSubmit, setCanBeSubmit ] = useState(false);

	const [userCreate, setUserCreate ] = useState(
    { 
      firstName: "",
      lastName: "",
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
		console.log(userCreate);
		
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
			<section className="signup-form">
				<div className="signup-container">
					<h2>Inscription</h2>
					<form onSubmit={handleSubmit}>
						<div className="form-container">
							<div className="half">
								<div className='field'>
									<input 
										type="text"
										placeholder=' Prenom'
										onChange={handleChange}
										name="lastName"
										value={userCreate.lastName}
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
										name="firstName"
										value={userCreate.firstName}
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
										value={userCreate.email}
										className="input"
									/>	
								</div>						
							</div>
						</div>
						<div className="form-container">
							<div className="half">
								<div className='field'>
									<input 
										type="password"
										placeholder=' Mot de passe'
										onChange={handleChange}
										name="password"
										value={userCreate.password}
										className="input"
									/>
								</div>						
							</div>
							<div className="half">
								<div className='field'>
									<input 
										type="password"
										placeholder=' Confirmez le mot de passe'
										onChange={handleChange}
										name="passwordConfirmation"
										value={userCreate.passwordConfirmation}
										className="input"
									/>		
								</div>				
							</div>
						</div>
						<div className="btn-container">
							<button 
								type="submit" 
								className={`btn ${canBeSubmit ? "" : "btn-error"}`}>
									Nous rejoindre
							</button>
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