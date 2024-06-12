import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";
import ItemCard from './ItemCard';
import { UseSelector, useSelector } from 'react-redux';
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom"


const Cart = (  ) => {

  
  const [activeCart , setActiveCart] = useState( true );

  const cartItems = useSelector( (state ) => state.cart.cart );
  console.log( "cartitems is :" , cartItems );

  const totalsum = cartItems.reduce( ( totalQty , item ) =>  totalQty + item.qty , 0 );
  const sum = cartItems.reduce( ( totalPrice , item ) =>  totalPrice + item.qty * item.price , 0 );
 const navigate = useNavigate();

  return (

    <>
    <div className = { `fixed right-0 top-0 w-full lg:w-[20vw] h-full bg-white p-5 mb-3 
    ${ activeCart ? "translate-x-0" : "translate-x-full"  
    } transition-all duration-500 z-50 `}
    >

        <div className='flex justify-between items-center my-3'> 
            <span className='text-xl font-bold text-gray-800 underline decoration-2'>
                My Order
            </span>

            <IoMdClose 
            onClick={ () => setActiveCart( !activeCart ) }

            className='border-2 border-black text-black font-bold p-1  rounded-md
             hover:bg-red-500  hover:text-white  cursor-pointer text-2xl ' />
            
        </div>
   
    {
      cartItems.length > 0 ? cartItems.map( (food) => {
        
          return ( 
          <ItemCard 
          key={food.id}
          id={food.id}
          name={food.name}
          price={food.price}
          img={food.img}
          qty={food.qty}
          />
          );
      }) :
       <h2 className='font-bold text-xl text-center text-gray-800'> No Item present </h2>
    }

    <div className='absolute bottom-0'>
        <h3 className='font-semibold text-gray-800' >  Items : {totalsum} </h3>
        <h3 className='font-semibold text-gray-800' > Total Amount :{sum} </h3>
        {/* hr means line  */}
        <hr className='w-[90vw] lg:w-[18vw] my-2 '  />  

        <button onClick={ () => navigate("/sucess") }
        
        className='bg-green-500 font-bold px-3 text-white rounded-lg py-2 
        w-[90vw] lg:w-[18vw] mb-5'> 
        Checkout </button>
       </div>
       
    </div>


    <FaShoppingCart onClick={ () => setActiveCart( !activeCart ) }
      className= { `rounded-full bg-white shadow-lg text-5xl 
      p-3 fixed bottom-4 right-5 cursor-pointer ${totalsum > 0 && "animate-bounce delat-500 transition-all"}`} 
      
    />
        
  
    </>
  )
}

export default Cart