import React from 'react'
import men from '../../assets/men2.jpg'
import AnimationText from '../animationText/AnimationText'

const AbooutUs = () => {
    return (
        <div className='w-[100%] 2xl:h-[600px] xl:h-[550px] lg:h-[550px] md:h-[650px] sm:h-[550px] h-[600px] mt-10'>
            <div className='2xl:w-[80%] xl:w-[80%] lg:w-[80%] md:w-[85%] sm:w-[85%] w-[90%] mx-auto h-[100%] 2xl:flex xl:flex lg:flex'>
                <div className='2xl:hidden xl:hidden lg:hidden w-[100%] h-[60%] md:flex sm:flex flex items-center justify-center'>
                    <div className='w-[70%] h-[80%] flex items-center justify-center'>
                        <img src={men} alt="" className='rounded-[50%] w-[80%] h-[80%] object-cover' />
                    </div>
                </div>
                <div className='2xl:w-[50%] xl:w-[50%] lg:w-[50%] md:w-[100%] sm:w-[100%] w-[100%] 2xl:h-[100%] xl:h-[100%] lg:h-[100%] md:h-[60%] sm:h-[60%] h-[40%] flex items-center justify-start'>
                    <div className='w-[90%] 2xl:h-[60%] xl:h-[60%] lg:h-[65%] md:h-[65%] sm:h-[70%] h-[70%]'>
                        <h2 className='text-white 2xl:text-[40px] xl:text-[38px] lg:text-[36px] md:text-[34px] sm:text-[32px] text-[30px] font-semibold w-[100%]'>Hello My friend 👋🏻</h2>
                        <h2 className='text-white 2xl:text-[50px] xl:text-[47px] lg:text-[44px] md:text-[41px] sm:text-[37px] text-[30px] font-bold  w-[100%]'>I'M <span className='text-[#6f42c1]'>Ibrohim Abdullayev</span></h2>
                        <p className='text-[#6f42c1] 2xl:text-[40px] xl:text-[38px] lg:text-[36px] md:text-[34px] sm:text-[32px] text-[30px] font-medium mt-[40px] w-[100%]'><AnimationText /></p>
                    </div>
                </div>
                <div className='2xl:flex xl:flex lg:flex md:hidden sm:hidden hidden w-[50%] h-[100%]  items-center justify-center'>
                    <div className='w-[70%] h-[80%]'>
                        <img src={men} alt="" className='rounded-[50%] w-[100%] h-[100%] object-cover' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AbooutUs
