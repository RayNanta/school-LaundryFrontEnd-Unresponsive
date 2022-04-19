import React from 'react'
import {Link} from 'react-router-dom'
import fotoLogin from '../images/fotoLogin.jpg'
import wave from '../images/wave.svg'

const Login = () => {
  return (
    <div>
      <div className="flex font-sourceSans">
        <div className="w-1/2">
            <img className='object-cover h-screen' src={fotoLogin} alt="foto-login" />
        </div>
        <div className="w-1/2 p-16 my-auto">
            <h1 className='font-bold text-4xl flex'>Welcome Back!<img className='ml-2 w-8' src={wave}/></h1>
            <p className='mt-5 max-w-md font'>Selamat datang di LaundryMu. Silahkan masukkan Username dan Password anda pada form yang telah tersedia dibawah ini!</p>
            <h3 className='font-bold mt-7'>Username:</h3>
            <input type="username" placeholder='Masukkan Username' className='border-solid border-2 p-3 rounded-md focus:outline-none focus:border-blue mt-3 w-full duration-300 text-gray-400'></input>
            <h3 className='font-bold mt-7'>Password:</h3>
            <input type="password" placeholder='Masukkan Password' className='border-solid border-2 p-3 rounded-md focus:outline-none focus:border-blue mt-3 flex w-full duration-300 text-gray-400'></input>
            <Link to='/home'>
              <button className='bg-blue text-white p-3 rounded-lg mt-10 w-full font-bold hover:bg-darkBlue duration-300'>Submit</button>
            </Link>
            <p className='text-center mt-5 text-gray-400'>Lupa Passoword? Klik <a className='text-blue' href="#">Link Berikut!</a></p>
        </div>

      </div>
    </div>
  )
}

export default Login