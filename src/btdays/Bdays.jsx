import React, { useState } from 'react'
import Singlebday from './Singlebday'
import { data } from './data'

const Bdays = () => {
  const [bdata, setbdata] = useState(data);
  const removeAll = () => {
  //  if(bdata.length > 0){
  //   setbdata([]);
  //  }else{
  //   setbdata(data);
  //  }
  
  bdata.length == 0 ? setbdata(data) : setbdata([]);
  }
  const remove = (id) => {
    const newItem = bdata.filter((item, index) => {
      return item.id !== id;
    });
    setbdata(newItem); 
  }
  return (
    <>
      <div className="container w-full p-5 xl:w-[35%] lg:w-[40%] mx-auto rounded-md shadow">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-700 to-green-600  text-center p-2 bg-clip-text text-transparent">{bdata.length} Birthdays Todays</h1>
        {bdata.map((item,index)=> {
          return <Singlebday r={remove} {...item} key={index}/>
        })}
        <button onClick={removeAll} className={`w-full  hover:bg-gradient-to-l rounded-full text-white font-bold py-2 ${bdata.length == 0 ? 'bg-gradient-to-r from-pink-500 to-green-700' : 'bg-gradient-to-r from-red-500 to-red-700'}`}>
          {bdata.length == 0 ? 'Refresh All' : 'Remove All'}
        </button>
      </div>
    </>
  )
}

export default Bdays
