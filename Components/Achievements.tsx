import React from 'react'

export default function Achievements() {
  return (
    <section className='w-[1280px] h-[445px] pt-[69px] pb-[112px] '>
      <div className='w-[1152px] h-[264px] flex flex-col gap-[24px]'>
        <div className='h-[136px] w-[1152px] flex flex-col gap-[24px] mx-[64px]'>
            <h2 className='text-[48px] leading-[57.6px] font-bold text-center'>Our Achivements</h2>
            <p className='text-[18px] leading-[27px] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
        </div>
        <div className='h-[96px] w-[1256px] mx-[12px] gap-[24px] flex justify-between '>
            <div className='w-[616px] h-[96px] flex gap-[24px] my-[8px]'>
            <div className='w-[296px] h-[80px] flex flex-col items-center justify-center '>
                <h3 className='text-[40px] w-[91px] leading-[48px] font-bold mb-[8px]'>+200</h3>
                <p className='text-[16px] w-[59px] leading-[24px]'>Courses</p>
            </div>
            <div className=' w-[296px] h-[80px] flex flex-col items-center justify-center'>
                <h3 className='text-[40px] w-[72px] leading-[48px] font-bold'>50K</h3>
                <p className='text-[16px] w-[60px] leading-[24px]'>Mentors</p>
            </div>
            </div>
            <div className='w-[616px] h-[96px] flex gap-[24px] my-[8px]'>
            <div className='w-[296px] h-[80px] flex flex-col items-center justify-center'>
                <h3 className='text-[40px] w-[91px] leading-[48px] font-bold'>370k</h3>
                <p className='text-[16px] w-[64px] leading-[24px]'>Students</p>
            </div>
            <div className='w-[296px] h-[80px] flex flex-col items-center justify-center'>
                <h3 className='text-[40px] w-[91px] leading-[48px] font-bold'>100+</h3>
                <p className='text-[16px] w-[85px] leading-[24px]'>Recognition</p>
            </div>
            </div>
        </div>
      </div>
    </section>
  )
}
