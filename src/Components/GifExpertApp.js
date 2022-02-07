import React, { useState } from 'react';
import AddCategory from './AddCategory';
import GifGrid from './GifGrid';

const GifExpertApp=()=>{

    const initialCategoryState = []

    const [categories, setCategories]=useState(initialCategoryState);
    
    

 

    return(
        <>
        
        <h1>GifApp</h1>
        <hr/>
        <AddCategory setCategories={setCategories}/>
        
        <ul>{
                categories.map(category=>(
                    <GifGrid key={category} 
                                category={category} />

                )
                    
                        
        )}
        </ul>
        </>

        
    );
};
export default GifExpertApp;