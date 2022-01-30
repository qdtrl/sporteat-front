import { FC, useEffect } from 'react';
import { useFetch } from '../../../../hooks/useFetch';

const Create:FC = () => {
  const { responseData, get} = useFetch(true);

  useEffect(() => {

  }, []);
  return (
    <p>
      Ceation d'entrainement
    </p>
  )
}

export default Create;