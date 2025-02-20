import React, { useState } from 'react'
import Singleb from './Singleb'
import { Data } from './Data'

const Birthday = () => {
    const [bdays, setbdays] = useState(Data)
const removeData = () => {
   if(bdays.length > 0){
    setbdays([]);
   } else{
     setbdays (Data);
   }
}
const removeBday = (id) => {
   console.log(id);
}
  return (
    <>
     <div className="container mx-auto p-3 rounded-md shadow-md shadow-pink-500 w-full xl:w-1/3 lg:w-[45%] md:w-[45%] ">
      <h2 className="text-center text-4xl font-bold bg-gradient-to-tl from-blue-500 to-green-600 p-2 bg-clip-text text-transparent">{bdays.length} Birthday's Today</h2>
      <hr className='my-4' />
    
      {bdays.map((item,index)=> {
        return <Singleb remove={removeBday} {...item} key={index}/>
      })}
      <button onClick={removeData} className={`bg-gradient-to-r ${bdays.length == 0 ? "from-green-500 to-green-700" : "from-red-500 to-red-700"}  text-white font-semibold rounded-full px-5 py-1 w-full hover:bg-gradient-to-l`}>
        {bdays.length == 0 ? "Refresh All" : "Remove All"}
      </button>
     </div>
    </>
  )
}

export default Birthday
