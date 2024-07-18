import React from 'react'
import { language, technalogies, tools } from './skil'
import Github from '../github/Github'

const MySkils = () => {
    return (
        <div className='w-[100%] h-auto mt-[50px]'>
            <div className='2xl:w-[80%] xl:w-[80%] lg:w-[80%] md:w-[85%] sm:w-[85%] w-[90%] mx-auto'>
                <div className='w-[100%] mx-auto'>
                    <h2 className='text-white 2xl:text-[40px] xl:text-[38px] lg:text-[36px] md:text-[34px] sm:text-[32px] text-[30px] font-semibold'>Professional <span className='text-[#9821ad]'>Skillset</span></h2>
                </div>
                <div className='w-[100%] mx-auto h-auto mt-[50px]'>
                    <h2 className='text-[40px] font-semibold text-white mb-5'>Language :</h2>
                    <div className='2xl:w-[80%] xl:w-[80%] lg:w-[80%] md:w-[100%] sm:w-[100%] w-[100%] grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 grid-cols-2 gap-4'>
                        {language.map((item, index) => (
                            <div
                                key={index}
                                className='custom-shadow custom-shadow-hover w-full h-[180px] border border-[#9821ad] rounded-[5px] flex items-center justify-center cursor-pointer transform transition-transform duration-300 hover:translate-y-[-10px] hover:shadow-lg'
                            >
                                <div className='w-4/5 h-4/5 flex flex-col items-center justify-center'>
                                    {item.img && <img src={item.img} alt={item.name} className='w-[70px]' />}
                                    <p className='text-white mt-3 text-[18px]'>{item.name}</p>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
                <div className='w-[100%] mx-auto h-auto mt-[50px]'>
                    <h2 className='text-[40px] font-semibold text-white mb-5'>Technalogies:</h2>
                    <div className='w-[100%] grid 2xl:grid-cols-5 xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 grid-cols-2  gap-4'>
                        {technalogies.map((item, index) => (
                            <div
                                key={index}
                                className='custom-shadow custom-shadow-hover w-full h-[180px] border border-[#9821ad] rounded-[5px] flex items-center justify-center cursor-pointer transform transition-transform duration-300 hover:translate-y-[-10px] hover:shadow-lg'
                            >
                                <div className='w-4/5 h-4/5 flex flex-col items-center justify-center'>
                                    {item.img && <img src={item.img} alt={item.name} className='w-[70px]' />}
                                    <p className='text-white mt-3 text-[18px]'>{item.name}</p>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
                <div className='w-[100%] mx-auto h-auto mt-[50px]'>
                    <h2 className='text-[40px] font-semibold text-white mb-5'><span className='text-[#9821ad] font-semibold'>Tools</span> I use:</h2>
                    <div className='w-[100%] grid 2xl:grid-cols-5 xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 grid-cols-2  gap-4'>
                        {tools.map((item, index) => (
                            <div
                                key={index}
                                className='custom-shadow custom-shadow-hover w-full h-[180px] border border-[#9821ad] rounded-[5px] flex items-center justify-center cursor-pointer transform transition-transform duration-300 hover:translate-y-[-10px] hover:shadow-lg'
                            >
                                <div className='w-4/5 h-4/5 flex flex-col items-center justify-center'>
                                    {item.img && <img src={item.img} alt={item.name} className='w-[70px]' />}
                                    <p className='text-white mt-3 text-[18px]'>{item.name}</p>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MySkils
