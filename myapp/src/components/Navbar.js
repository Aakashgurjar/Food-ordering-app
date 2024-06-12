import React from 'react'
import SearchSlice, { setsearch } from '../redux/slices/SearchSlice'
import { useDispatch } from 'react-redux'


const Navbar = () => {

  // SearchSlice me function ko call krne k liye use krte h useDispatch hook ka , don't call the directly
  const dispatch = useDispatch();


  return (

    <nav className='flex flex-col lg:flex-row justify-between py-3 mx-6 mb-10 '> 
        <div > 
          <h3 className='text-xl font-bold text-gray-600'> 
          { new Date().toUTCString().slice( 0 , 16 )} </h3>

          <h1 className='text-2xl font-bold '> Flavoro Foods </h1>
        </div>

        <div className='flex flex-row gap-10'>
            <input 
            type='search'
            name='search' 
            id='' 
            placeholder='Search here'
            autoComplete='off' 
            onChange={ (e) =>  dispatch( setsearch (e.target.value ))}

            className='p-3 border border-gray-400 text-sm rounded-lg outline-none lg:w-[25vw] gap-10' 
            />

           <div className=' w-[250px]'>

           </div>

        </div>
    </nav>
  )
}

export default Navbar