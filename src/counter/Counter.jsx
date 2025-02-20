import React, { useState } from 'react'

const Counter = () => {
   const [count, setcount] = useState(0)
    const handleCount = (e) => {
        let text = e.target.innerHTML
         if(text == 'Decrease'){
            setcount(count - 1)
         }else if(text == 'Reset'){
            setcount(0)
         }else{
            setcount(count + 1)
         }
    }
  return (
    <>
      <div className="container mx-auto p-5 rounded-5 shadow-lg w-full xl:w-1/4 md:w-1/3">
       <h1 className={`bg-gradient-to-tr font-bold  mx-auto w-max text-7xl bg-clip-text text-transparent ${count < 0 ? "bg-red-500 animate-bounce" : "from-red-600 to-blue-700"}`}>{count}</h1>
       <div className="flex gap-3 items-center my-7 justify-center">
        <button onClick={handleCount} className="rounded-full bg-gradient-to-r outline-0 text-white from-red-700 to-orange-500 py-1 px-3 hover:bg-gradient-to-l cursor-pointer">Decrease</button>
        <button onClick={handleCount} className="rounded-full bg-gradient-to-bl from-yellow-400 to-pink-500 text-white hover:bg-gradient-to-br transition-all py-1 px-3 cursor-pointer">Reset</button>
        <button onClick={handleCount} className="rounded-full bg-gradient-to-bl from-green-500 text-white hover:bg-gradient-to-br transition-all to-blue-700 py-1 px-3 cursor-pointer">Increase</button>
       </div>
      </div>
    </>
  )
}

export default Counter
