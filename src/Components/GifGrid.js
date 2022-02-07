import React, {useEffect, useState} from 'react';
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../Hooks/useFetchGIfs';
import GifGridItem from './GifGridItem';

const GifGrid=({category})=>{

    const {loading}=useFetchGifs();
    /* const [images, setImages]=useState([])

    useEffect(() => {
      getGifs(category).then(setImages)
    }, [category]);
    
    */

    
   

    return(
        <>
       <h3>{category}</h3>
       <hr></hr>
        {loading ? 'Cargando... ' : 'Ya cargó'}

        
        {/* <div className="card-grid">
            
            {
                images.map( img => (
                    <GifGridItem 
                        key={ img.id }
                        { ...img }
                    />
                ))
            }
        
        </div> */}
    </>
    );

}
export default GifGrid;