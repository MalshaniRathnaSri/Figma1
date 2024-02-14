import React from 'react'
import Image from 'next/image'

const Story = () => {
  return (
    <div className='w-[1240px] h-[511px] lg:justify-end lg:p-0 p-7'>
      <div className='lg:flex lg:justify-end gap-12'>
        <div>
          <div className='text-[#00BAD2] text-[13px] mt-[68px]'>Our Story</div>
          <div className='lg:text-[45px] text-[29px] font-bold '>Every Australian <br/> deserves a pool</div>
          <div className='mt-8'>Our patented range of Plungie Pools are an award-winning,<br/> world-first product that’s pioneering the future of swimming <br/> pools; bringing the fastest, easiest and highest quality <br/> concrete pool to the market.</div>
          <div className='lg:flex lg:gap-24  lg:h-[44px]'>
            <div className='gap-6 flex mt-6'>
              <div>
                <Image src={'/icon1Story.png'} alt='icon1Story' width={44} height={44}/>
              </div>
              <div className='whitespace-nowrap text-[13px] font-bold'>
                <div>100% Australian <br/> Owned and Operated</div>
              </div>
            </div>
            <div className='gap-6 flex mt-6'>
              <div>
                <Image src={'/icon2Story.png'} alt='icon2Story' width={44} height={44}/>
              </div>
              <div className='whitespace-nowrap text-[13px] font-bold'>
                <div>Supporting local <br/> builders to do what <br/> they do best</div>
              </div>
            </div>
          </div>
        </div>
        <div className='lg:mt-0 mt-10'>
          <Image src={'/story.png'} alt='story' width={664} height={511}/>
        </div>
      </div>
    </div>
  )
}

export default Story