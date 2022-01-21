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

const Informations = () => {
  const location = useLocation().pathname;

  const paths = [ 
    "/informations/compute-informations",
    "/informations/my-equipement",
    "/informations/update-register" ];

  return (
    <>
      <section className="update-informations-form">
        <nav className="nav-informations">
          <Link 
            className={`item-menu ${location === paths[0] ? "active" : ""}`} 
            to={paths[0]}>
              Informations Calculs
          </Link>
          <Link 
            className={`item-menu ${location === paths[1] ? "active" : ""}`}
            to={paths[1]}>
              Mon équipement
          </Link>
          <Link 
            className={`item-menu ${location === paths[2] ? "active" : ""}`}
            to={paths[2]}>
              Informations Profils
          </Link>
        </nav>
        <div className="update-informations-container">
          <Switch>			
            <Route path="/informations/compute-informations">
              <ComputeInformations/>
            </Route>
            <Route path="/informations/my-equipement" >
              <MyEquipement/>
            </Route>
            <Route path="/informations/update-register">
              <UpdateRegister/>
            </Route>
            <Route>
              <NoMatch />
            </Route> 			
          </Switch>
        </div>
      </section>
    </>
  )
}

export default Informations;