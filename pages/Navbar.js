import React from 'react'
import logo from '../assests/image.png'
import { ImCart } from 'react-icons/im'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './spinner.css'
const Navbar = () => {
  const {cart}=useSelector((state)=>state)
  return (
    <div >
        <nav className='flex justify-between items-center h-20 max-w-6xl mx-auto'>
    
       

        <div className='flex items-center font-medium text-slate-100 mr-5 space-x-6 '>
            <NavLink to='/'> <p>Home</p> </NavLink>
           <div className='relative'>
            <NavLink to='/cart'>
              <div><ImCart className='text-2xl'/>
           
            </div> </NavLink>
           </div>
           </div>
           </nav>
    </div>
  )
}

export default Navbar

