import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center font-sourceSans mx-20 my-8'>
        <div>
            <h1 className='font-bold text-3xl'>Laundry<span className='text-blue'>Mu.</span></h1>
        </div>
        <div className="text-lg">
            <Link className='mr-8 hover:text-blue duration-300 font-semibold' to='/home'>Home</Link>
            <Link className='mr-8 hover:text-blue duration-300 font-semibold' to='/member'>Member</Link>
            <Link className='mr-8 hover:text-blue duration-300 font-semibold' to='/outlet'>Outlet</Link>
            <Link className='mr-8 hover:text-blue duration-300 font-semibold' to='/user'>User</Link>
            <Link className='mr-8 hover:text-blue duration-300 font-semibold' to='/paket'>Paket</Link>
            <Link className='mr-8 hover:text-blue duration-300 font-semibold' to='/transaksi'>Transaksi</Link>
            <Link className='bg-blue p-3 text-white rounded-lg hover:bg-darkBlue duration-300 font-semibold' to='/'>Logout</Link>
        </div>
        
    </nav>
  )
}

export default Navbar