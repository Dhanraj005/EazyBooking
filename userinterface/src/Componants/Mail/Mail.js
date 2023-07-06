import React from 'react'

const Mail = () => {
  return (
    <div className='mail w-full h-40 gap-2 items-center flex-col flex text-white text-2xl mt-5 bg-zinc-900' >
    <h1>Save Time Save Money !!</h1>
    <span>Sing Up And we will send you Best Deals !!!</span>
      <div className=''>
        <input className=' gap-2 p-2 border-hidden rounded-3xl text-black' type='text ' placeholder='enter your mail id'/>
        <button className='bg-slate-500 ml-1 p-2 rounded-3xl' >Sign Up</button>
      </div>
    </div>
  )
}

export default Mail
