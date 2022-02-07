import React, {useEffect, useState} from 'react';

import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { useFetchGifs } from '../Hooks/useFetchGIfs';
import GifGridItem from './GifGridItem';

const GifGrid=({category})=>{

    const {data:images, loading}=useFetchGifs(category);
      

    return(
        <>  
       <h3>#{category}</h3>
       <hr></hr>
       
        {loading && <p>Loading...</p>}
     
         <Row xs={1} md={2} className="g-4">
            
            {
                images.map( img => (
                   
                    <GifGridItem 
                        key={ img.id }
                        { ...img }
                    />
                    
                    
                ))
            }
        
        </Row> 
    </>
    );

}
export default GifGrid;