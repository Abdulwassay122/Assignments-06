import React from 'react'
import pic from '../Assets/Image.svg'
import air1 from '../Assets/air1.svg'
import air2 from '../Assets/air2.svg'
import air3 from '../Assets/air3.svg'
import air4 from '../Assets/air4.svg'
import air5 from '../Assets/air5.svg'
import air6 from '../Assets/air6.svg'
import Image from "next/image";

export default function Section1() {
  return (
    <section className='w-[1280px] h-[1028px]  font-roboto '>
      <div className='flex'>
      <div className='w-[640px] h-[300px] my-[250px]  pl-[80px] pr-[60px] flex flex-col gap-[24px]'>
        <div className='w-[500px] h-[212px] flex flex-col gap-[24px]'>
          <h1 className='text-[56px] font-bold leading-[67.2px] h-[134px]'>Learn new skills online with ease</h1>
          <p className='text-[18px] leading-[27px] h-[54px]'>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
        </div>
        <div className='w-[358px] h-[64px] pt-[16px] flex gap-[16px]'>
          <button className='w-[178px] h-[48px] rounded-[5px] bg-black text-white'>Start learning now</button>
          <button className='w-[164px] h-[48px] rounded-[5px] border-solid border-black border-[1px]'>Start learning now</button>
        </div>
      </div>
      <div className='w-[640px]'>
        <Image src={pic} alt="" />
      </div>
      </div>

      <div className='h-[228px] bg-[#F7F7F7] flex gap-[64px]'>
        <div className='w-[320px] h-[68px] '>
          <h5 className='font-bold text-[24px] leading-[33.6px] py-[80px] ml-[8px]'>Trusted by 2000+ companies worldwide.</h5>
        </div>
        <div className='w-[880px] h-[56px] flex my-[86px] py-[8.74px] gap-[19.2px] pl-[41.56px]'>
          <Image src={air2} alt="" />
          <Image src={air5} alt="" />
          <Image src={air4} alt="" />
          <Image src={air6} alt="" />
          <Image src={air1} alt="" />
          <Image src={air3} alt="" />
        </div>
      </div>
    </section>
  )
}
