import React from 'react'
import Image from 'next/image'

const Quality = () => {
  return (
    <div className='w-[1040px] h-[1106px] ml-[200px] space-y-72'>
        <div className='mt-[166px] flex justify-center space-x-[68px]'>
            <div>
                <Image src={'/quality1.png'} alt='quality1' width={397} height={397}/>
            </div>
            <div className=''>
                <div className='text-[#11284B] text-[29px] font-bold'>Premium Quality, <br/> Rigorously tested</div>
                <div className='mt-5 text-[16px]'>Every Plungie is manufactured in quality controlled <br/> facilities in Brisbane, Queensland and Kilmore, <br/> Victoria - we know to the gram how much steel and <br/> concrete is in it. This controlled factory environment <br/> allows us to produce a proven and tested concrete <br/> products.</div>
            </div>
        </div>
        <div className='flex gap-[68px]'>
          <div className='w-[397px] h-[397px]'>
            <div className='w-[397px] h-[256px]'>
              <div className='text-[#11284B] text-[29px] font-bold'>We hope to ensure future generations</div>
              <div className='text-[16px] text-[#11284B] mt-8'>We believe pools are the heartbeat of the Australian <br/> backyard. They're the sound of Summer; the sound <br/> of families and children enjoying where they live. <br/></div>
              <div className='text-[16px] text-[#11284B] mt-8'>Plungie is not just a pool... Plungie is a hot Christmas<br/> spent in the backyard, playing classic catches in the<br/> pool.</div>
            </div>
          </div>
          <div className='w-[397px] h-[397px]'>
            <Image src={'/quality2.png'} alt='quality2' width={397} height={397}/>
          </div>
        </div>
    </div>
  )
}

export default Quality