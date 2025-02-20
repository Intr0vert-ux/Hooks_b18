import React, { useState } from 'react'

const Usestatebasics = () => {
  const [name , setName] = useState("This is the first Title")
    const changeTitle = () => {
        if(name == "This is the first Title"){
         setName("Changed Title")
        }else{
            setName("This is the first Title")
        }
    }
  return (
    <div className='container mx-auto text-center my-4'>
      <h1 className="font-bold text-5xl my-3 bg-gradient-to-l w-max mx-auto p-3 bg-clip-text text-transparent from-red-700 to to-blue-700">
       {name}
      </h1>
      <button onClick={changeTitle} className="px-5 py-2 rounded-full bg-gradient-to-br from-purple-600 to to-yellow-600 hover:scale-105 hover:bg-gradient-to-bl transition-all text-white cursor-pointer">Change Text</button>
    </div>
  )
}

export default Usestatebasics
