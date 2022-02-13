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

const Login = () => {
	const user:any = useSelector((state) => state);
	const history = useHistory();
	const dispatch = useDispatch();
	const [ canBeSubmit, setCanBeSubmit ] = useState(false);
	const [ userLogin, setUserLogin ] = useState({
		email: "",
		password: ""
	})	

	useEffect(() => {
		if (user.isLogged) {
			history.push(`/`);
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user])

	const { error, responseData, token, post } = useFetch();

	useEffect(() => {
		if (responseData && !error) {
			const { data }:any = responseData
			dispatch({ type: LOGIN, data, token });
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [responseData]);

	const checkEmailFormat = () => {		
		return  userLogin.email.match(REGEX) ? true : false
	}

	useEffect(() => {		
		if(checkEmailFormat()) 
			setCanBeSubmit(true);
		else
			setCanBeSubmit(false);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [userLogin])

	const handleLogin = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		post('/api/login', { user: userLogin } );
	}

	const handleChange = (event: ChangeEvent<HTMLInputElement> ) => {
		event.preventDefault();
		setUserLogin( prevUserLogin => {
      const { name, value } = event.target;
      return {
        ...prevUserLogin,
        [name]: value
      }
    })

	}

	return(
		<section className="signup login flex__center padding">
			<div className="bg">
				<h2>Connexion</h2>
				<div className='form-container'>
				<form className='register' onSubmit={handleLogin}>
					<label>Votre e-mail</label>
					<input 
						type="email"
						placeholder=' Email'
						onChange={handleChange}
						name="email"
						value={userLogin.email}
						className="input"
					/>	
					<label>Mot de passe</label>
					<input 
						type="password"
						autoComplete="current-password"
						placeholder=' Mot de passe'
						onChange={handleChange}
						name="password"
						value={userLogin.password}
						className="input"
					/>
					<button 
						type="submit" 
						className={`button__custom btn ${canBeSubmit ? "" : "btn-error"}`}>
						Se connecter
					</button>
				</form>
				</div>
				<p className='__signup'>Pas encore de compte ? <Link 
					className="signup" 
					to="/signup">
						Creer un compte
					</Link>
				</p>
				{error && <Alerts type={"error"} message={error}/>}
			</div>
		</section>
	)
}

export default Login;
