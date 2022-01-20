import { 
	useEffect,
	useState, 
	ChangeEvent, 
	FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { LOGIN } from '../../stores/actions';
import { REGEX } from '../../config/config';
import Alerts from '../../components/Alerts';


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
		<section className="signup-form ">
			<div className="signup-container">
				<h2>Connexion</h2>
				<form onSubmit={handleLogin}>
					<div className="form-container">
						<div className="half">
							<div className='field'>
										<input 
											type="email"
											placeholder=' Email'
											onChange={handleChange}
											name="email"
											value={userLogin.email}
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
									value={userLogin.password}
									className="input"
								/>
							</div>							
						</div>
					</div>
					<div className="btn-container">
							<button 
								type="submit" 
								className={`btn ${canBeSubmit ? "" : "btn-error"}`}>
								Se connecter
							</button>
					</div>
				</form>
				{error && <Alerts type={"error"} message={error}/>}
			</div>
		</section>
	)
}

export default Login;
