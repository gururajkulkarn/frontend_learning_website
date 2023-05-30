import React from 'react'
const Buttons = (props) => {
  return (
    <>
      <div>
<h1 className='container' style={{color:"black"}}>{props.heading}</h1>
      <a href={props.target} target='blank'><button className="bg-black text-white px-4 m-5 py-1 h-30 rounded-md  border hover:border-solid hover:border-black  hover:text-black hover:bg-white">{props.title}</button></a> 


      </div>
    </>
  )
}

export default Buttons
