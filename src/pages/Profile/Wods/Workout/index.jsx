import {useFetch} from '../../../../hooks/useFetch'
import {useEffect, useState} from 'react';
import Working from './Working';
import Work from './Work';

const Workout = () => {
    const { responseData, post} = useFetch(true);
    const [started, getStarted] = useState(false);
    const [apiResponse, handleApiResponse] = useState();


    useEffect(() => {
        if(!responseData || !apiResponse){
            post("/wods", {})
        }
        handleApiResponse(responseData?.wod);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [responseData])

    const recall = (e) => {
        e.preventDefault();
        handleApiResponse(!apiResponse);
    }

    return (
        
        (apiResponse
        &&
        
            ((started 
            &&
            <Working apiResponse={apiResponse}/>)
            ||
            <Work apiResponse={apiResponse} recall={recall} getStarted={getStarted} />
        
        ))||
        <>
            Chargement...
        </>
    )
}

export default Workout;