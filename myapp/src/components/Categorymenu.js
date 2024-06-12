import React, { useEffect } from 'react'
import { useState } from 'react'
import FoodData from '../data/FoodData'
import { useDispatch , useSelector } from 'react-redux'
import { setCategory } from '../redux/slices/CategorySlice'


const Categorymenu  = () => {

const [ categories , setCategories ] = useState( [] );

    const listUniqueCategories = () => {
      const uniqueCategories = [ 
      ...new Set( FoodData.map( ( Food ) => Food.category  )),
      ];

      setCategories (  uniqueCategories  );
      console.log(  uniqueCategories  );
    };

    useEffect ( () => {
      listUniqueCategories();
    } , [] )

    const dispatch = useDispatch();

    const selectedCategory = useSelector( (state ) => state.category.category );
    console.log("Selected category is : " ,  selectedCategory );


  return (

    <div className='mx-6 '>
      <h3 className=' text-xl font-semibold'> Find the best food </h3>
      <div className='my-5 flex gap-3 overflow-x-scroll  scroll-smooth lg:overflow-x-hidden '> 

        <button 
        onClick={ () => dispatch( setCategory ( "All" )) } 
        className= {`px-3 py-2 bg-gray-400 font-bold rounded-lg
        hover:bg-green-500 hover:text-white ${
        selectedCategory === 'All' &&  "bg-green-500 text-white" } ` }> 
            All 
        </button>

        

       {/* remaining buttons  */}
        {
            categories.map( (category , index ) => {

              return (
                <button 
                onClick={ () => dispatch( setCategory( category )) }
                key={ index }

                className={`px-3 py-2 bg-gray-400 font-bold rounded-lg
                hover:bg-green-500 hover:text-white ${
                selectedCategory === category  && "bg-green-500 text-white" } ` }> 

                 { category }
                </button>
       
              )

             })

        }

      </div>
    
    </div>
  )
}

export default Categorymenu 