import React, { useState } from 'react';

export const useFetchGifs =()=>{
    const [first, setfirst] = useState({data:[], loading:true});

    setTimeout(()=>{
        setfirst({data:[1,2,3,4], loading:false})
    },3000)

    return first;
}