import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div>
        <div className='lg:flex lg:justify-between hidden'>
            <div className='h-[187.8px] w-[162.93px]'>
                <div>
                    <Image src={'/logo.png'} alt='logo' width={160} height={41.45}/>
                </div>
                <div className='h-[40px] w-[95px]'>
                    <div>&copy;2023Plugie</div>
                    <div className='font-bold whitespace-nowrap mt-2'>Privacy Policy</div>
                </div>
                <div className='text-[#00BAD2] mt-16'>Keep in Touch</div>
                <div className='mt-4'>
                    <Image src={'/logo socialmedia.png'} alt='logo socialmedia' width={162.9} height={20.35}/>
                </div>
            </div>
                <div className='w-[120px] h-[200px] text-[13px] space-y-5'>
                    <div className='text-[#00BAD2]'>Plungie for</div>
                    <div>Builders</div>
                    <div>Architects</div>
                    <div>Developers</div>
                    <div>Landscapes</div>
                    <div>Homeowners</div>
                </div>
                <div className='w-[120px] h-[236px] text-[13px] space-y-5'>
                    <div className='text-[#00BAD2]'>Our Pools</div>
                    <div>Arena</div>
                    <div>Studio</div>
                    <div>Original</div>
                    <div>Max</div>
                    <div>Compare Pools</div>
                    <div>Why Plugie?</div>
                </div>
            <div className='w-[119px] h-[128px] text-[13px] space-y-5'>
                <div className='text-[#00BAD2]'>Accessories</div>
                <div>Equipment</div>
                <div>Add-ons</div>
                <div>Interior coating</div>
            </div>
            <div className='w-[120px] h-[272px] text-[13px] space-y-5'>
                <div className='text-[#00BAD2]'>More Info</div>
                <div>Process</div>
                <div>Delivery</div>
                <div>Payment</div>
                <div>Warranty</div>
                <div>Find installer</div>
                <div>Display Locations</div>
                <div>Downloads</div>
            </div>
            <div className='w-[120px] h-[200px] text-[13px] space-y-5'>
                <div className='text-[#00BAD2]'>Company</div>
                <div>Contact us</div>
                <div>About</div>
                <div>History</div>
                <div>Careers</div>
                <div>Blog</div>
            </div>
        </div>

        <div className='lg:hidden p-8'>
        <div className='h-[187.8px] w-[162.93px]'>
                <div>
                    <Image src={'/logo.png'} alt='logo' width={160} height={41.45}/>
                </div>
                <div className='h-[40px] w-[95px]'>
                    <div>&copy;2023Plugie</div>
                    <div className='font-bold whitespace-nowrap mt-2'>Privacy Policy</div>
                </div>
                <div className='mt-16'>Keep in Touch</div>
                <div className='mt-4'>
                    <Image src={'/logo socialmedia.png'} alt='logo socialmedia' width={162.9} height={20.35}/>
                </div>
            </div>
            <div className='flex justify-between mt-16'>
                <div className='w-[120px] h-[200px] text-[13px] space-y-5'>
                    <div className='text-[#00BAD2]'>Plungie for</div>
                    <div>Builders</div>
                    <div>Architects</div>
                    <div>Developers</div>
                    <div>Landscapes</div>
                    <div>Homeowners</div>
                </div>
                <div className='w-[120px] h-[236px] text-[13px] space-y-5'>
                    <div className='text-[#00BAD2]'>Our Pools</div>
                    <div>Arena</div>
                    <div>Studio</div>
                    <div>Original</div>
                    <div>Max</div>
                    <div>Compare Pools</div>
                    <div>Why Plugie?</div>
                </div>
            </div>
            <div className='flex justify-between mt-16'>
                <div className='w-[119px] h-[128px] text-[13px] space-y-5'>
                    <div className='text-[#00BAD2]'>Accessories</div>
                    <div>Equipment</div>
                    <div>Add-ons</div>
                    <div>Interior coating</div>
                </div>
                <div className='w-[120px] h-[272px] text-[13px] space-y-5'>
                    <div className='text-[#00BAD2]'>More Info</div>
                    <div>Process</div>
                    <div>Delivery</div>
                    <div>Payment</div>
                    <div>Warranty</div>
                    <div>Find installer</div>
                    <div>Display Locations</div>
                    <div>Downloads</div>
                </div>
            </div>
            <div className='w-[120px] h-[200px] text-[13px] space-y-5'>
                <div className='text-[#00BAD2]'>Company</div>
                <div>Contact us</div>
                <div>About</div>
                <div>History</div>
                <div>Careers</div>
                <div>Blog</div>
            </div>
        </div>
    </div>
  )
}

export default Footer