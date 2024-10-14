import React, { useState } from 'react'
import { BiSearch, BiCaretDown, BiCheck } from "react-icons/bi";


const DropDown = ({sortBy,onSortByChange,orderBy,onOrderByChange}) =>{
  return (
    <div className='w-56 mt-2 rounded absolute bg-white right-0 top-0  border border-gray-300 '>
      <div 
      onClick={()=>onSortByChange('petName')}
        className='
          flex justify-between items-center px-4 py-2
          cursor-pointer
          hover:bg-gray-100
          text-sm text-gray-700'
        >
        Pet Name  {sortBy == 'petName' && <BiCheck/>}
      </div>
      <div 
       onClick={()=>onSortByChange('ownerName')}
        className='
          flex justify-between items-center px-4 py-2
          cursor-pointer
          hover:bg-gray-100
          text-sm text-gray-700'
        >
        Owner Name  {sortBy == 'ownerName' && <BiCheck/>}
      </div>
      <div 
        onClick={()=>onSortByChange('aptDate')}
        className='
          flex justify-between items-center px-4 py-2
          cursor-pointer
          hover:bg-gray-100
          text-sm text-gray-700'
        >
        Date {sortBy == 'aptDate' && <BiCheck/>}
      </div>
      <hr />
      
      <div 
       onClick={()=>onOrderByChange('asc')}
        className='
          flex justify-between items-center px-4 py-2
          cursor-pointer
          hover:bg-gray-100
          text-sm text-gray-700'
        >
        ASC {orderBy == 'asc' && <BiCheck/>}
      </div>
      <div 
       onClick={()=>onOrderByChange('desc')}
        className='
          flex justify-between items-center px-4 py-2
          cursor-pointer
          hover:bg-gray-100
          text-sm text-gray-700'
        >         
        Desc {orderBy == 'desc' && <BiCheck/>}
      </div>
    </div>
  )
}

const Search = ({query,onQueryChange,sortBy,onSortByChange,orderBy,onOrderByChange}) => {
  const [toggleSort,setToggleSort] = useState(false)
  return (
   <div className='py-5 '>
      <div className=" 
        flex items-center rounded border border-gray-300 
        gap-x-3 transition hover:border-indigo-500
      ">
        <label htmlFor="query" className="text-gray-500 pl-1">
          <BiSearch />
        </label>
        <input
          id="query"
          type="text"
          placeholder="Search"
          value={query}
          onChange={(event)=>{
            onQueryChange(event.target.value)
          }}
          className="
            w-full  bg-transparent placeholder-gray-400
            focus:outline-none focus:ring-0
            autofill:bg-red-500
          "
        />
        <div>
          <button type='button'  onClick={()=>{setToggleSort(!toggleSort)}} className='flex   items-center w-max  justify-center py-2 px-4 bg-blue-400 border-2 border-blue-400 text-sm text-white'>
            <span className='font-medium'>Sort By</span> <BiCaretDown className='ml-2 '/>
          </button>
        </div>
      </div> 
      {
        toggleSort && 
        <div className='relative'>
          <DropDown 
          sortBy={sortBy}
          onSortByChange={mySort=> onSortByChange(mySort)}
          orderBy={orderBy}
          onOrderByChange={myOrder=> onOrderByChange(myOrder)}
          />
        </div>
      }
      
   </div>
  )
}

export default Search


