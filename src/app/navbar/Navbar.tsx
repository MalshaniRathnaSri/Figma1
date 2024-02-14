'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import {BsList, BsX} from 'react-icons/bs'
import Link from 'next/link'

const Navbar = () => {
  const handleScroll = () =>{};
  
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen (!menuOpen);

  return (
    <div className='w-[1440px] h-[118px]'>
        <div className='lg:flex items-center justify-center space-between w-[1040px] h-[66px] gap-[10px] p-1 hidden'>
            <div className='w-[160px] h-[49px] flex items-center justify-center'>
              <img src='/logo.png' alt='logo' width='160' height='49' />
            </div>
            <div className='flex w-[581px] h-[16px] space-x-[28px] whitespace-nowrap ml-10 mr-10 text-custom-blue'>
              <div>Professionals</div>
              <div>Homeowners</div>
              <div>Our Pools</div>
              <div>Project Gallery</div>
              <div>The Block</div>
              <div>More Info</div>
            </div>
            <div className=''>
              <button className='w-[160px] h-[38px] border-2 border-[#11284B] rounded-[32px] text-[#11284B] ml-24 '>CTA</button>
            </div>
        </div>

        <div className='h-[72px] w-[375px] flex justify-between items-center gap-[13px] ml-10 mt-10 lg:hidden'>
          <div>
            <Image src={'/logo.png'} alt='logo' width={124} height={32.12}/>
          </div>
          <div className='lg:hidden flex justify-center items-center w-[37px] h-[36px]'>
            <BsList className='text-[#11284B] ml-[4.63px] w-[27.75px] h-[18.11px] mt-[9.06px]' onClick={toggleMenu}/>
          </div>

          <div
            className={
              menuOpen
                ? "fixed top-0 left-0 w-[100%] sm:hidden h-screen bg-white p-10 ease-in-out duration-500"
                : "fixed left-[-100%] top-0 p-10 ease-in-out duration-900"
            }
          >

            <div className="flex w-full items-center justify-between">
            <div className=''>
              <Image src={'/logo.png'} alt='Logo Image' height={49} width={160}/>
            </div>
              <div onClick={toggleMenu} className="cursor-pointer">
                <BsX className="h-8 w-8 text-slate-900 bg-slate-200 rounded-full" />
              </div>
              </div>
              

            <div className="flex-col py-4">
              <ul className='Plus Jakarta Sans text-[#11284B]'>
                <li className="py-4 hover:underline hover:decoration-red font-medium text-lg">
                  <Link href="/">Professionals</Link>
                </li>
                <li
                  onClick={() => setMenuOpen(false)}
                  className="py-4 hover:underline hover:decoration-red font-medium text-lg"
                >
                  <Link href="/">Homeowners</Link>
                </li>
                <li
                  onClick={() => setMenuOpen(false)}
                  className="py-4 hover:underline hover:decoration-red font-medium text-lg"
                >
                  <Link href="/">Our Pools</Link>
                </li>
                <li
                  onClick={() => setMenuOpen(false)}
                  className="py-4 hover:underline hover:decoration-red font-medium text-lg"
                >
                  <Link href="/">Project Gallery</Link>
                </li>
                <li
                  onClick={() => setMenuOpen(false)}
                  className="py-4 hover:underline hover:decoration-red font-medium text-lg"
                >
                  <Link href="/">More Info</Link>
                </li>
                
                <li>
                   <div className='flex justify-center w-full h-[38px] border border-b-2 border-[#11284B] border-radius:[32px] text-[#11284B] rounded-2xl'>
                      <button>CTA</button>
                    </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar