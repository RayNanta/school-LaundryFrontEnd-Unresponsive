import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const TransaksiPilihKonfirmasi = () => {
  return (
    <div>
        <Navbar />
        <div className='mx-20 mt-20 font-sourceSans'>
          <h1 className='text-xl font-semibold'>Laman Pilih Konfirmasi</h1>
          <div className='mt-10'>
            <h3>Nama Pelanggan</h3>
            <input type="text" placeholder='Masukkan Nama Pelannggan' className='border-solid border-2 p-3 rounded-md focus:outline-none focus:border-blue mt-3 w-full duration-300 text-gray-400'></input>
            <h3 className=' mt-7'>Invoice</h3>
            <input type="text" placeholder='Invoice' className='border-solid border-2 p-3 rounded-md focus:outline-none focus:border-blue mt-3 w-full duration-300 text-gray-400'></input>
            <h3 className=' mt-7'>Jumlah Tagihan</h3>
            <input type="text" placeholder='Masukkan Jumlah Tagihan' className='border-solid border-2 p-3 rounded-md focus:outline-none focus:border-blue mt-3 w-full duration-300 text-gray-400'></input>
            <h3 className='mt-7'>Jumlah Bayar</h3>
            <input type="text" placeholder='Masukkan Jumlah Bayar' className='border-solid border-2 p-3 rounded-md focus:outline-none focus:border-blue mt-3 w-full duration-300 text-gray-400'></input>
          </div>
          <div>
            <button className='bg-blue py-3 px-5 mt-10 text-white rounded-lg hover:bg-darkBlue duration-300 font-semibold'>Submit</button>
            <Link className='py-3 px-5 text-black rounded-lg hover:text-blue duration-300 font-semibold' to='/konfirmasi_transaksi'>Back</Link>
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default TransaksiPilihKonfirmasi