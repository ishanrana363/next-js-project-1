import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <div className='bg-yellow-100 shadow-md shadow-gray-400 ' >
            <div className='max-w-screen-xl mx-auto ' >

                <div className='flex items-center justify-between ' >
                    {/* logo */}
                    <div className='flex items-center py-2  ' >
                        <img className='w-12' src='https://res.cloudinary.com/dj2edy2rg/image/upload/v1729519593/Ishan/s8so3jcdu0sfbriqs14p.png' alt='Logo' />
                        <h1 className='font-bold text-4xl ml-4 text-green-500 ' >Player</h1>
                    </div>
                    <div className='flex items-center gap-4 ' >
                        <button className='bg-black text-white py-2 border-2 shadow-md border-white text-xl rounded-lg px-4  ' >
                            <Link href={"/create-post"} >CREATE POST</Link>
                        </button>
                        <div>
                            <button className='bg-white border-1 px-4 py-1 rounded-lg text-lg shadow-md border-2 border-black ' ><Link href={"/sing-in"} >SIGNIN</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
