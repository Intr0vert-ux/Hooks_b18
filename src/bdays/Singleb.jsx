import React from 'react'
import { BsFillTrash3Fill } from "react-icons/bs";


const Singleb = ({id,name,age,image,remove}) => {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
            <img src={image} className='w-[50px] h-[50px] my-3 rounded-full object-cover' alt="" />
            <div className=" text-2xlflex flex-col">
                <h3>{name}</h3>
                <p className='text-gray-400 '>{age} years old</p>
            </div>
        </div>
        <button onClick={() => remove(id)} className="w-[50px] h-[50px] flex justify-center items-center bg-red-500 rounded-full cursor-pointer text-white hover:bg-red-700">
        <BsFillTrash3Fill size={25} color='white'/>
        </button>
      </div>
      
    </>
  )
}

export default Singleb
