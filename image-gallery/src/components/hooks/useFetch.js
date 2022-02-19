import { useEffect, useState } from "react";
import axios from 'axios'


const useFetch = (url) => {

    const [images , setImages] = useState(null);
    const [isLoading , setIsLoading] = useState(false);
    const [error , setError] = useState(false);


    useEffect(() => {
         
        const fetchImages = () => {

          axios.get(url)
          .then((data) => {
               console.log(data);
               setIsLoading(true);
          })
          .catch((error) => {
              setError(error);
          })
          .finally(() => {
               setIsLoading(false);
          })
            

             

        }
         

        fetchImages();




    },[url]);

    return {isLoading , images , error};

}





export default useFetch;