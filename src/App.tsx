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
import MenuHome from './components/Layout/NavBar/NavHome';
import SideNavBar from './components/Layout/NavBar/SideNavBar';

import Footer from './components/Layout/Footer';
import NoMatch from './pages/NoMatch';
import Informations from './pages/Profile/Informations';
import WorkoutOfTheDay from './pages/Profile/WorkoutOfTheDay';
import MealsOfTheDay from './pages/Profile/MealsOfTheDay';
import Progression from './pages/Profile/Progression';
import Register from './pages/Visitors/Register';

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
      { user.isLogged ? <SideNavBar/> : <MenuHome/> }
      <Switch>
        <Route path="/" exact>
          { user.isLogged ? ( false ? <Informations/> : <WorkoutOfTheDay/> ) : <HomePage/> }
        </Route>
        <Route path="/login" exact>
          <Login/>
        </Route>
        <Route path="/signup" exact>
          <Register/>
        </Route>
        <Route path="/sport" exact>
          <SportPresentation />
        </Route>
        <Route path="/meal" exact>
          <MealPresentation />
        </Route> 
        { user.isLogged && 
         <Route path="/meals-of-the-day">
          <MealsOfTheDay/>
        </Route> }
        { user.isLogged && 
        <Route path="/workout-of-the-day">
          <WorkoutOfTheDay/>
        </Route> }
        { user.isLogged && 
        <Route path="/informations">
          <Informations/>
        </Route> }
        { user.isLogged && 
        <Route path="/progression">
          <Progression/>
        </Route> }
        <Route>
          <NoMatch />
        </Route>
      </Switch>
      <Footer/>
    </Router>      
  );
};

export default App;