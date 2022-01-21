import { useFetch } from '../../../../../hooks/useFetch';

import Card from './Card/card'
import CardBuilding from './Card/cardBuilding';

const Work = (props) => {
    const { post } = useFetch(true);
    const { apiResponse } = props;

    
    const handleClick = () => {
        props.getStarted(true);
        console.log("my ",props)
        post(`/my_performances`, apiResponse );
    }

    return(

        <div className="workout">        
            <button onClick={props.recall} className="btn">Demander d'autres exercices</button>
            {   apiResponse?.length === 3 &&
                apiResponse?.map((element, index) => (
                    <Card key={index} card={element}/>
                ))
            }
            {   apiResponse?.length === 2 &&
                apiResponse?.map((element, index) => (
                    element.name === "Renforcement" ? <CardBuilding key={index} card={element}/> : <Card key={index} card={element}/>
                ))
            }
            <button onClick={handleClick} className="btn">Go commencer l'entraînement !</button>
        </div>
    
    )
}

export default Work;