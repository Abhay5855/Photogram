import { useEffect, useState } from "react";



const useFetch = (url) => {

    const [images , setImages] = useState(null);
    const [isLoading , setIsLoading] = useState(false);
    const [error , setError] = useState(false);


    useEffect(() => {
         
        const fetchImages = () => {

          axios.get(url)
          .then((data) => {
               console.log(data);
          })
          .catch((error) => {
              setError(error);
          })
          
            

             

        }
         

        fetchImages();




    },[url]);

  
}

export default useFetch();