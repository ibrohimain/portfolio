import React from 'react'
import { BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='w-[100%] h-[60px] bg-[rgba(14,14,30,0.2)]'>
      <div className='2xl:w-[80%] xl:w-[80%] lg:w-[80%] md:w-[85%] sm:w-[85%] w-[90%] h-[100%] mx-auto 2xl:flex xl:flex lg:flex md:flex justify-between items-center '>
        <div className='2xl:w-[25%] xl:w-[25%] lg:w-[30%] md:w-[30%] sm:w-[100%] w-[100%] h-auto text-center 2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[14px] sm:text-[13px] text-[12px] text-white'>Developed by Ibrohim Abdullayev</div>
        <div className='2xl:w-[25%] xl:w-[25%] lg:w-[30%] md:w-[30%] sm:w-[100%] w-[100%] h-auto text-center 2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[14px] sm:text-[13px] text-[12px] text-white flex justify-center'>Copyright © 2024 Abundev.uz</div>
        <div className='2xl:w-[25%] xl:w-[25%] lg:w-[30%] md:w-[30%] sm:w-[100%] w-[100%] h-auto flex  2xl:justify-end xl:justify-end lg:justify-end md:justify-end sm:justify-center justify-center gap-5 mt-2 2xl:mt-0 xl:mt-0 lg:mt-0 sm:mt-2 md:mt-0'>
          <BsYoutube className='text-white cursor-pointer text-[18px]' />
          <BsInstagram className='text-white cursor-pointer text-[18px]' />
          <BsTwitter className='text-white cursor-pointer text-[18px]' />
        </div>
      </div>
    </div>
  )
}

export default Footer
