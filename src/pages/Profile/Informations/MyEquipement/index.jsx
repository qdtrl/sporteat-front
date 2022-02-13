import { useEffect, useReducer } from "react";
import Loader from "../../../../components/Loader";
import { useFetch } from '../../../../hooks/useFetch';
import './index.scss';

const reducer = (previousState , payload) => {
  const { type, value } = payload;

  switch (type) {
    case "add":
      return [...previousState.slice(0, value.index), value.data, ...previousState.slice(value.index)];
    case "remove":
      return [...previousState.filter(val => val.id !== value.data.id)]
    case "fill":
      return [...value]
    case "reorder":
      const [ previousIndex, newIndex ] = value;
      const [removed] = previousState.splice(previousIndex, 1);
      return [...previousState.splice(newIndex, 0, removed)]
    default:
      return previousState;
  }
}

const  MyEquipement = () => {
  
  const [myEquipement, setMyEquipement] = useReducer(reducer, []);
  const [allEquipement, setAllEquipement] = useReducer(reducer, []);

  const { isLoading:isLoadingUser, get, responseData:dataUserEquipement, error:errorUser} = useFetch(true);
  const { isLoading:isLoadingAll, get:getall, responseData:dataAllEquipement, error:errorAll} = useFetch(true);
  const { patch, destroy} = useFetch(true);

  useEffect(() => {
    get('/my_equipements') 
    getall('/equipements')  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(()=> {
    if (dataUserEquipement && !errorUser) {
      setMyEquipement({type: "fill", value: dataUserEquipement});
    }
  }, [dataUserEquipement, errorUser])

  useEffect(()=> {
    if (dataAllEquipement && !errorAll) {
      setAllEquipement({type: "fill", value: dataAllEquipement});
    }
  }, [dataAllEquipement, errorAll])

  const removeUserItem = (event) => {
    const id = event.target.id;
    const data = myEquipement[id];
    setAllEquipement({type: "add", value: {index:id, data}})
    destroy(`/my_equipements/${data.id}`)
    setMyEquipement({type: "remove", value: {index:id, data}})
    console.log(event);
  }

  const addUserItem = (event) => {
    const id = event.target.id;
    const data = allEquipement[id];
    setMyEquipement({type: "add", value: {index:id, data}})
    setAllEquipement({type: "remove", value: {index:id, data}})
    patch(`/my_equipements/${data.id}`)
  }
  
  return (
    <div className="equipements">
      <ul className="equipement-items">
        <label>L'équipement que je possede : </label>
        { isLoadingUser && <Loader/> }
        {myEquipement?.map((equipement, index) => (
          <li 
            className="equipement-item"
            id={index}
            key={index}
            onClick={removeUserItem}>
              {equipement.name} {equipement.weight? `${equipement.weight} kg` : "" }
          </li>
        ))}
      </ul>
      <ul className="equipement-items">
        <label>Tout les équipements de nos exercices :</label>
        { isLoadingAll && <Loader/> }
        {allEquipement?.map((equipement, index) => (
          <li
            className="equipement-item" 
            id={index}
            key={index}
            onClick={addUserItem}>
              {equipement.name} {equipement.weight? `${equipement.weight} kg` : "" }
          </li>
        ))} 
      </ul>
    </div>
  );
}
export default MyEquipement;