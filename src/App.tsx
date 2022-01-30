import { FC, useEffect } from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useFetch } from './hooks/useFetch';
import { API_URL } from './config/config';
import { GET_USER, LOGOUT } from './stores/actions';

import HomePage from './pages/Visitors/HomePage';
import Login from './pages/Visitors/Login';
import SportPresentation from './pages/Visitors/SportPresentation';
import MealPresentation from './pages/Visitors/MealPresentation/index';
import Profile from './pages/Profile';
import MenuHome from './components/Layout/NavBar/NavHome';
import { Footer } from './components/Layout/Footer';
import NoMatch from './pages/NoMatch';


const App:FC = () => {
  const user:any = useSelector((state) => state);
  const { headers }:any = useFetch(true);
  const dispatch = useDispatch();

	const getUser = () => {
    fetch(`${API_URL}/api/users/${user.id}`,{ headers })
    .then((response) => response.json())
	  .then ((data) => {
      if (data.errors) {
        dispatch({ type: LOGOUT })
      } else {
        dispatch({ type: GET_USER, data });
      }
		})
    .catch(() => dispatch({ type: LOGOUT }))
  }

  useEffect(() => {
    if (user.id) {
      getUser()
    } 
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

  return (
    <Router>
      { user.isLogged ?  "" : <MenuHome/> }
      <Switch>
        <Route path="/">
          { user.isLogged ? <Profile/> : <HomePage/> }
        </Route>
        <Route path="/login" exact>
          <Login/>
        </Route>
        <Route path="/sport" exact>
          <SportPresentation />
        </Route>
        <Route path="/meal" exact>
          <MealPresentation />
        </Route>
        <Route>
          <NoMatch />
        </Route>
      </Switch>
      <Footer/>
    </Router>      
  );
};

export default App;