import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full bg-transparent px-8 py-6  flex justify-between  absolute top-0 z-20  '>
        <h1 className=' text-2xl font-semibold px-4'>My Gallary</h1>
        <button className='px-3 py-2 bg-white text-slate-950 border-none rounded cursor-pointer'>Enter Gallary</button>
    </nav>

  )
}

export default Navbar