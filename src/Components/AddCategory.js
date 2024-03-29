import React, { useState } from 'react';

const AddCategory=({setCategories})=>{

    const [inputValue, setInputValue]=useState()

    const handleInputChange=(e)=>{
        setInputValue(e.target.value)

    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(inputValue.trim().length>1){
            setCategories(cates=>[inputValue])
        }else{
            alert('Debe ingresar una categoría')
        }

       
       
    }
    

    return(
    
        <form onSubmit={handleSubmit} className='search__container'> 
            <div className='form__control'>
            <input type="text" placeholder='Buscar tema...'  value={inputValue} onChange={handleInputChange}
            ></input>


            </div>
           
            <button type='submit' >Agregar</button>
        </form>
            

    );    
}

export default AddCategory;