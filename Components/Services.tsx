import React from 'react'
import pentool from '../Assets/pen-tool-2.svg'
import volumehigh from '../Assets/volume-high.svg'
import group from '../Assets/group.svg'
import microphone from '../Assets/microphone.svg'
import link from '../Assets/link.svg'
import arrow from '../Assets/arrow-2.svg'
import briefcase from '../Assets/briefcase.svg'
import book from '../Assets/book(1).svg'
import book1 from '../Assets/book.svg'
import Image from "next/image";

export default function Services() {
  return (
    <section className='w-[1280px] h-[1049px] font-roboto py-[112px]'>

      <div className='w-[768px] h-[109px] flex flex-col gap-[24px] mx-[256px]'> {/*  section 1 */}
        <h2 className='text-[48px] font-bold leading-[57.6px]'>Explore Courses By Category</h2>
        <p className='text-[18px] leading-[27px]'>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
      </div>

      <div className='w-full h-[636px] flex flex-col gap-[64px] mt-[80px]'> {/*  section 2 */}
            <div className='h-[132px] flex gap-[24px]'> {/* sub section 1 */}
            {/* 1---- */}
            <div className='w-[410.67px] h-[132px] bg-[#F7F7F7] flex p-[16px] gap-[32px] rounded-[5px]'>
                <div className='w-[100px] h-[100px] bg-white rounded-[5px] flex justify-center items-center'>
                    <Image className='w-[32px] h-[32px]' src={pentool} alt="" />
                </div>
                <div className='w-[246.67px] h-[57px] my-[21.5px] '>
                    <p className='font-semibold text-[20px] leading-[30px]'>Design & Development</p>
                    <p className='text-[18px] leading-[27px]'>50+ Courses Available</p>
                </div>
            </div>
            {/* 2---- */}
            <div className='w-[410.67px] h-[132px] bg-[#F7F7F7] flex p-[16px] gap-[32px] rounded-[5px]'>
                <div className='w-[100px] h-[100px] bg-white rounded-[5px] flex justify-center items-center'>
                    <Image className='w-[32px] h-[32px]' src={volumehigh} alt="" />
                </div>
                <div className='w-[246.67px] h-[57px] my-[21.5px] '>
                    <p className='font-semibold text-[20px] leading-[30px]'>Marketing</p>
                    <p className='text-[18px] leading-[27px]'>50+ Courses Available</p>
                </div>
            </div>
            {/* 3---- */}
            <div className='w-[410.67px] h-[132px] bg-[#F7F7F7] flex p-[16px] gap-[32px] rounded-[5px]'>
                <div className='w-[100px] h-[100px] bg-white rounded-[5px] flex justify-center items-center'>
                    <Image className='w-[32px] h-[32px]' src={group} alt="" />
                </div>
                <div className='w-[246.67px] h-[57px] my-[21.5px] '>
                    <p className='font-semibold text-[20px] leading-[30px]'>Development</p>
                    <p className='text-[18px] leading-[27px]'>50+ Courses Available</p>
                </div>
            </div>
            </div>
            <div className='h-[132px] flex gap-[24px]'> {/* sub section 2 */}
            {/* 4---- */}
            <div className='w-[410.67px] h-[132px] bg-[#F7F7F7] flex p-[16px] gap-[32px] rounded-[5px]'>
                <div className='w-[100px] h-[100px] bg-white rounded-[5px] flex justify-center items-center'>
                    <Image className='w-[32px] h-[32px]' src={microphone} alt="" />
                </div>
                <div className='w-[246.67px] h-[57px] my-[21.5px] '>
                    <p className='font-semibold text-[20px] leading-[30px]'>Communication</p>
                    <p className='text-[18px] leading-[27px]'>50+ Courses Available</p>
                </div>
            </div>
            {/* 5---- */}
            <div className='w-[410.67px] h-[132px] bg-[#F7F7F7] flex p-[16px] gap-[32px] rounded-[5px]'>
                <div className='w-[100px] h-[100px] bg-white rounded-[5px] flex justify-center items-center'>
                    <Image className='w-[32px] h-[32px]' src={link} alt="" />
                </div>
                <div className='w-[246.67px] h-[57px] my-[21.5px] '>
                    <p className='font-semibold text-[20px] leading-[30px]'>Digital Marketing</p>
                    <p className='text-[18px] leading-[27px]'>50+ Courses Available</p>
                </div>
            </div>
            {/* 6---- */}
            <div className='w-[410.67px] h-[132px] bg-[#F7F7F7] flex p-[16px] gap-[32px] rounded-[5px]'>
                <div className='w-[100px] h-[100px] bg-white rounded-[5px] flex justify-center items-center'>
                    <Image className='w-[32px] h-[32px]' src={arrow} alt="" />
                </div>
                <div className='w-[246.67px] h-[57px] my-[21.5px] '>
                    <p className='font-semibold text-[20px] leading-[30px]'>Self Development</p>
                    <p className='text-[18px] leading-[27px]'>50+ Courses Available</p>
                </div>
            </div>
            </div>
            <div className='h-[132px] flex gap-[24px]'> {/* sub section 3 */}
            {/* 7---- */}
            <div className='w-[410.67px] h-[132px] bg-[#F7F7F7] flex p-[16px] gap-[32px] rounded-[5px]'>
                <div className='w-[100px] h-[100px] bg-white rounded-[5px] flex justify-center items-center'>
                    <Image className='w-[32px] h-[32px]' src={briefcase} alt="" />
                </div>
                <div className='w-[246.67px] h-[57px] my-[21.5px] '>
                    <p className='font-semibold text-[20px] leading-[30px]'>Business</p>
                    <p className='text-[18px] leading-[27px]'>50+ Courses Available</p>
                </div>
            </div>
            {/* 8---- */}
            <div className='w-[410.67px] h-[132px] bg-[#F7F7F7] flex p-[16px] gap-[32px] rounded-[5px]'>
                <div className='w-[100px] h-[100px] bg-white rounded-[5px] flex justify-center items-center'>
                    <Image className='w-[32px] h-[32px]' src={book} alt="" />
                </div>
                <div className='w-[246.67px] h-[57px] my-[21.5px] '>
                    <p className='font-semibold text-[20px] leading-[30px]'>Finance</p>
                    <p className='text-[18px] leading-[27px]'>50+ Courses Available</p>
                </div>
            </div>
            {/* 9---- */}
            <div className='w-[410.67px] h-[132px] bg-[#F7F7F7] flex p-[16px] gap-[32px] rounded-[5px]'>
                <div className='w-[100px] h-[100px] bg-white rounded-[5px] flex justify-center items-center'>
                    <Image className='w-[32px] h-[32px]' src={book1} alt="" />
                </div>
                <div className='w-[246.67px] h-[57px] my-[21.5px] '>
                    <p className='font-semibold text-[20px] leading-[30px]'>Consulting</p>
                    <p className='text-[18px] leading-[27px]'>50+ Courses Available</p>
                </div>
            </div>
            </div>
            <div className='w-[155px] h-[48px] border-solid mx-[562.5px]'> {/* sub section 4 */}
                <button className='w-[155px] h-[48px] border-solid border-black border-[1px] rounded-[5px]'>View All Courses</button>
            </div>
        <div>
        </div>
      </div>
    </section>
  )
}
