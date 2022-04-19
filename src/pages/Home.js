import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import fotoHome from '../images/fotoHome.svg'

const Home = () => {
  return (
    <div>
        <Navbar />
        <div className='mx-20 mt-20 font-sourceSans flex items-center'>
          <div className='w-1/2'>
            <h1 className='text-5xl font-bold'>Selamat Datang, Bolo!</h1>
            <p className='max-w-md mt-5'>Silahkan mengakses beberapa tab tersedia pada navigasi diatas. Jangan ragu untuk menghubungi kami bila diperlukan!</p>
          </div>
          <div className='w-1/2'>
            <img className='' src={fotoHome} alt="" />
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default Home