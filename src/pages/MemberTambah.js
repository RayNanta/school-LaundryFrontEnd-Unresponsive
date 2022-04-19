import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const MemberTambah = () => {
  return (
    <div>
        <Navbar />
        <div className='mx-20 mt-20 font-sourceSans'>
          <h1 className='text-xl font-semibold'>Laman Tambah Member</h1>
          <div className='mt-10'>
            <h3>Nama</h3>
            <input type="text" placeholder='Masukkan Nama' className='border-solid border-2 p-3 rounded-md focus:outline-none focus:border-blue mt-3 w-full duration-300 text-gray-400'></input>
            <h3 className=' mt-7'>Alamat</h3>
            <input type="text" placeholder='Masukkan Alamat' className='border-solid border-2 p-3 rounded-md focus:outline-none focus:border-blue mt-3 w-full duration-300 text-gray-400'></input>
            <h3 className=' mt-7'>No. Telepon</h3>
            <input type="text" placeholder='Masukkan No. Telepon' className='border-solid border-2 p-3 rounded-md focus:outline-none focus:border-blue mt-3 w-full duration-300 text-gray-400'></input>
            <h3 className='mt-7'>Jenis Kelamin</h3>
            <input type="text" placeholder='Masukkan Jenis Kelamin' className='border-solid border-2 p-3 rounded-md focus:outline-none focus:border-blue mt-3 w-full duration-300 text-gray-400'></input>
          </div>
          <div>
            <button className='bg-blue py-3 px-5 mt-10 text-white rounded-lg hover:bg-darkBlue duration-300 font-semibold'>Submit</button>
            <Link className='py-3 px-5 text-black rounded-lg hover:text-blue duration-300 font-semibold' to='/member'>Back</Link>
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default MemberTambah