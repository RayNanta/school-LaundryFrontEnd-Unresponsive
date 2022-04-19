import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const User = () => {
  return (
    <div>
        <Navbar />
        <div className='mx-20 mt-20 font-sourceSans'>
            <h1 className='text-xl font-semibold'>Laman Pengelola User</h1>
            <div className='mt-10'>
                <table className='w-full'> 
                    <thead className=' border-b-2 border-gray-200 text-left'>
                        <th className='p-5'>User</th>
                        <th className='p-5'>Username</th>
                        <th className='p-5'>Role</th>
                        <th className='p-5'>Outlet</th>
                        <th className='p-5'>Aksi</th>
                    </thead>
                    <tbody>
                        <tr className=' border-b-2 border-gray-200 text-left hover:bg-gray-100 duration-300'>
                            <td className='p-5'>test</td>
                            <td className='p-5'>test</td>
                            <td className='p-5'>test</td>
                            <td className='p-5'>test</td>
                            <td className='p-5 flex'>
                                <div>
                                    <Link className='border-2 border-gray-200 py-3 px-5 text-black rounded-lg hover:bg-blue hover:text-white  duration-300 font-semibold' to='/edit_user'>Edit</Link>
                                </div>
                                <div>
                                    <Link className='border-2 border-gray-200 py-3 px-5 ml-5 text-black rounded-lg hover:bg-red hover:text-white  duration-300 font-semibold' to='/tammbah_user'>Hapus</Link>
                                </div>
                            </td>
                        </tr>
                        <tr className=' border-b-2 border-gray-200 text-left hover:bg-gray-100 duration-300'>
                            <td className='p-5'>test</td>
                            <td className='p-5'>test</td>
                            <td className='p-5'>test</td>
                            <td className='p-5'>test</td>
                            <td className='p-5 flex'>
                                <div>
                                    <Link className='border-2 border-gray-200 py-3 px-5 text-black rounded-lg hover:bg-blue hover:text-white  duration-300 font-semibold' to='/edit_user'>Edit</Link>
                                </div>
                                <div>
                                    <Link className='border-2 border-gray-200 py-3 px-5 ml-5 text-black rounded-lg hover:bg-red hover:text-white  duration-300 font-semibold' to='/tammbah_user'>Hapus</Link>
                                </div>
                            </td>
                        </tr>
                        <tr className=' border-b-2 border-gray-200 text-left hover:bg-gray-100 duration-300'>
                            <td className='p-5'>test</td>
                            <td className='p-5'>test</td>
                            <td className='p-5'>test</td>
                            <td className='p-5'>test</td>
                            <td className='p-5 flex'>
                                <div>
                                    <Link className='border-2 border-gray-200 py-3 px-5 text-black rounded-lg hover:bg-blue hover:text-white  duration-300 font-semibold' to='/edit_user'>Edit</Link>
                                </div>
                                <div>
                                    <Link className='border-2 border-gray-200 py-3 px-5 ml-5 text-black rounded-lg hover:bg-red hover:text-white  duration-300 font-semibold' to='/tammbah_user'>Hapus</Link>
                                </div>
                            </td>
                        </tr>
                        
                        
                        
                       
                    </tbody>
                </table>
                <div className='mt-10'>
                    <Link className='bg-blue py-3 px-5 text-white rounded-lg hover:bg-darkBlue duration-300 font-semibold' to='/tambah_user'>Tambah</Link>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default User