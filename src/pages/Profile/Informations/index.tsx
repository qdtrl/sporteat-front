import { 
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import ComputeInformations from "./ComputeInformations";
import MyEquipement from './MyEquipement';
import UpdateRegister from './UpdateRegister';
import NoMatch from '../../NoMatch';
import './index.scss';

const Informations = () => {
  const location = useLocation().pathname;

  const paths = [ 
    "/informations/compute-informations",
    "/informations/my-equipement",
    "/informations/update-register" ];

  return (
    <section className="update-informations-form flex__profile">
      <nav className="informations">
        <Link 
          className={`item first ${location === paths[0] ? "active" : ""}`} 
          to={paths[0]}>
            Informations Calculs
        </Link>
        <Link 
          className={`item center ${location === paths[1] ? "active" : ""}`}
          to={paths[1]}>
            Mon équipement
        </Link>
        <Link 
          className={`item last ${location === paths[2] ? "active" : ""}`}
          to={paths[2]}>
            Informations Profils
        </Link>
      </nav>
      <div className="informations-container">
        <Switch>			
          <Route path={paths[0]}>
            <ComputeInformations/>
          </Route>
          <Route path={paths[1]} >
            <MyEquipement/>
          </Route>
          <Route path={paths[2]}>
            <UpdateRegister/>
          </Route>
          <Route>
            <NoMatch />
          </Route> 			
        </Switch>
      </div>
    </section>
  )
}

export default Informations;