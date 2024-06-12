import React, { useState } from 'react'
import { useEffect } from 'react';
import { PropagateLoader }  from "react-spinners"
// react spinner site  

const Sucess = () => {

  const [loading , setloading ]  = useState( true );
  useEffect( () => {
    setTimeout(() => {
      setloading( false );
    }, 2000 );
  }, []);

       return  (


<div className='flex flex-col items-center justify-center h-screen '>
     {
        loading ?  ( 
        <PropagateLoader color="#36d7b7" />
        ) : (
            <p className='font-semibold text-2xl' >   Your order has been successfully placed! </p>
            ) }
        </div>
       )
      
      }
export default Sucess;


