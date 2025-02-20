import React from 'react'
import { HiTrash } from "react-icons/hi2";

const Singlebday = ({id,name,image,age,r}) => {
  return (
    <>
      <div className="flex justify-between items-center my-5">
        <div className="flex gap-3 items-center justify-center">
            <img src={image} className='w-[50px] h-[50px] rounded-full object-cover' alt="" />
            <div className="flex flex-col">
                <h3>{name}</h3>
                <p className="text-gray-400">
                    {age} years old
                </p>
            </div>
        </div>
        <button onClick={() => r(id)} className="w-[50px] h-[50px] flex justify-center items-center rounded-full bg-red-500 hover:bg-red-700 cursor-pointer">
        <HiTrash size='25' color='white' />
        </button>
      </div>
    </>
  )
}

export default Singlebday
