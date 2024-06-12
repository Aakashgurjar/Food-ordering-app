import React, { useEffect, useState } from 'react'
import { FaRubleSign } from 'react-icons/fa';
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

import toast from 'react-hot-toast';

import { useDispatch } from 'react-redux';
import { removeFromCart , incrementQty , decrementQty  } from '../redux/slices/CartSlices';

const ItemCard = ( { id,name , qty , price , img    }  ) => {

  const dispatch = useDispatch();
  // console.log("dispatch is : ",dispatch);
  

  return (

    <div className='flex  gap-2 shadow-md rounded-lg p-2 mb-3'>

       <MdDelete onClick={ () => {

         dispatch( removeFromCart( {id , img , name, price , qty:1  }) );
         toast(`${name} Removed `, {
          icon: '👋',
         });
        }}
             className=' absolute right-7 cursor-pointer hover:text-red-600' />

        <img src={img} 
        alt='no img'
        className='w-[50px] h-[50px] '/>

        <div className='leading-5'>
            <h2 className='font-bold text-gray-800'> {name} </h2>
          <div className='flex justify-between '> 
            <span className='text-green-500 font-bold'> ₹{price}</span>


            <div className='flex justify-center items-center gap-2 absolute right-7' >


              < FiMinus onClick={ () => 
              qty > 1 ? dispatch ( decrementQty( {id }))  : (qty = 0 )  } 
               className='border-2 border-gray-600 text-gray
               hover:text-white hover:bg-green-500 hover:border-none rounded-md p-0.5 text-xl  transition-all ease-linear cursor-pointer  ' />

              <span > {qty} </span>

              < FiPlus onClick={ () =>
              qty >= 1 ? dispatch(incrementQty( {id })) : (qty = 0 )   } 
              className='border-2 border-gray-600 text-gray
               hover:text-white hover:bg-green-500 hover:border-none rounded-md p-0.5 text-xl  transition-all ease-linear cursor-pointer  '/>

            </div>
          </div>

        </div>
    </div>
  )
}

export default ItemCard