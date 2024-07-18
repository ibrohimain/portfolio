import React from 'react'
import { BiDownload } from 'react-icons/bi'

const Resume = () => {
    return (
        <div className='w-[100%] mt-[80px]'>
            <div className='2xl:w-[80%] xl:w-[80%] lg:w-[80%] md:w-[85%] sm:w-[85%] w-[90%] mx-auto h-[300px] flex items-center justify-center'>
                <button className='2xl:px-[50px] xl:px-[48px] lg:px-[46px] md:px-[44px] sm:px-[42px] px-[40px] py-2 bg-[#551161] text-white font-medium flex items-center gap-2 rounded-[5px]'><BiDownload className='text-white' />Download CV</button>
            </div>
        </div>
    )
}

export default Resume
