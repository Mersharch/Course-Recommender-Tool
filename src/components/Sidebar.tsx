import React from 'react'
import Link from 'next/link'

const Sidebar:React.FC = () => {
  return (
    <nav className='w-[100%] md:w-[20%] lg:w-[12%] md:min-h-screen border-r-0 bg-blue-600'>
      <ul className='flex flex-row w-full md:flex-col border-r-0 items-center justify-between md:justify-normal '>
        <li className='md:block border-r-0 md:hover:rounded-md md:hover:rounded-r-none  md:w-full text-center p-2 text-slate-100 md:hover:bg-white md:hover:text-teal-800 font-semibold italic'>
          <Link href='/recommender-tool'>Recommender Tool</Link>
        </li>

        <li className='md:block border-r-0 md:hover:rounded-md md:hover:rounded-r-none  md:w-full text-center p-2 text-slate-100 md:hover:bg-white md:hover:text-teal-800 font-semibold italic'>
          <Link href='/meet-the-team' >About the Team</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Sidebar