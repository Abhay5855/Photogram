


import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch';

const Images_Home = () => {

    const {images , isLoading , error} = useFetch('');
   

  


  return (
    <div>

        <h2>Home</h2>

    </div>
  )
}

export default Images_Home