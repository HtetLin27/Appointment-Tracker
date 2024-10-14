import React, { useState } from 'react'
import { BiCalendar } from "react-icons/bi";


const AddAppointment = () => {

    const [toggleForm,setToggleForm] = useState(false)
  return (
    <form className='mt-5 rounded border'>
        <button type='button' onClick={()=> {setToggleForm(!toggleForm)}} className={
            `flex items-center gap-x-[3px] w-full bg-blue-400 text-white px-2 py-3 font-semibold rounded-t-md ${toggleForm ? 'rounded-t-md' : 'rounded-md'}` 
        } >
            <BiCalendar className='text-[26px]'/> Add Appointment
        </button>
        { toggleForm &&
         <div className='p-3'>
         <div className='grid grid-cols-2 mt-5'>
             <label htmlFor="owner-name" className='text-sm font-medium text-gray-700'>Owner Name</label>
             <input id='owner-name' type="text" 
             className='max-w-lg block w-full shadow-sm p-2
             focus:ring-indigo-500 focus:border-indigo-500 border' />
         </div>
         <div className='grid grid-cols-2 mt-5'>
             <label htmlFor="pet-name"  className='text-sm font-medium text-gray-700'>Pet Name</label>
             <input id='pet-name' type="text" 
             className='max-w-lg block w-full shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 border' />
         </div>
         <div className='grid grid-cols-2 mt-5'>
             <label htmlFor="apt-date" className='text-sm font-medium text-gray-700'>Apt Date</label>
             <input id='apt-date' type="date" 
             className='max-w-lg block w-full shadow-sm  p-2 focus:ring-indigo-500 focus:border-indigo-500 border'/>
         </div>
         <div className='grid grid-cols-2 mt-5'>
             <label  htmlFor="apt-time" className='text-sm font-medium text-gray-700'>Apt Time</label>
             <input id='apt-time' type="time" 
             className='max-w-lg block w-full shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 border-2'/>
         </div>
         <div className='grid grid-cols-2 mt-5'>
             <label htmlFor="apt-notes" className='text-sm font-medium text-gray-700'>Appointment Notes</label>
             <textarea id='apt-notes' type="text" 
             className='max-w-lg block w-full shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 border' />
         </div>
         <div className='flex justify-end mt-5'>
             <button type='submit'
             className='font-medium ml-3 inline-flex rounded hover:bg-blue-500 justify-center py-2 px-4 border border-transparent bg-blue-400 border-2 border-blue-400 text-sm text-white'
             >Submit</button>
         </div>
     </div>
         }
       

    </form>
  )
}

export default AddAppointment