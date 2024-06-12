import React from 'react'
import './Error.css'

const  Page = () => {
  return (
    // <div className=' h-[100vh]  font-semibold text-[30px] text-blue-500
    // flex justify-center items-center'> 
    //   Page not found!
    // </div>

    // <div className=''>
    //   Page not found
    // </div>
    
<div class="error-contain">
	<div class="error-text">
		<h1>404</h1>
		<p className='font-semibold'> Page not found.</p>
	</div>
	<div class="binoculars">
		<div class="back-bino"></div>
		<div class="left-bino"></div>
		<div class="right-bino"></div>
		<div class="left-bino-lense">
			<div class="eye"></div>
		</div>
		<div class="right-bino-lense">
			<div class="eye"></div>
		</div>
	</div>
</div>

  )
}

export default  Page