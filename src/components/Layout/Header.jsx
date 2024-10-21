import Link from 'next/link'
import React from 'react'
import { FaEdit } from "react-icons/fa";
import { HiArrowLeftEndOnRectangle } from "react-icons/hi2";


const Header = () => {
    return (
        <div className='bg-yellow-100 shadow-md shadow-gray-400 ' >
            <div className='max-w-screen-xl mx-auto ' >

                <div className='flex items-center justify-between ' >
                    {/* logo */}
                    <div className='flex items-center md:py-2  ' >
                        <img className=' w-8 md:w-12' src='https://res.cloudinary.com/dj2edy2rg/image/upload/v1729519593/Ishan/s8so3jcdu0sfbriqs14p.png' alt='Logo' />
                        <h1 className='font-bold text-xl md:text-4xl ml-2 md:ml-4 text-green-500 ' >Player</h1>
                    </div>
                    <div className='flex items-center gap-4 ' >
                        <button className='bg-black text-white py-1 md:py-2 border-2 shadow-md border-white text-xl rounded-lg px-4  ' >
                            <Link href={"/create-post"} > <span className=' md:block hidden ' >CREATE POST</span> <FaEdit className='md:hidden  text-2xl ' />
                                <span></span> </Link>
                        </button>
                        <div>
                            <button className='bg-white border-1 px-4 py-1 rounded-lg text-lg shadow-md border-2 border-black ' ><Link href={"/sign-in"} >
                                <span className=' hidden md:block ' > SIGNIN </span> <span className=' text-2xl block md:hidden ' ><HiArrowLeftEndOnRectangle/></span>
                            </Link></button>
                        </div>
                        <div>
                            <img className='w-12' src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1729522305/vkaplmttkizctzwoy9rx.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
