import React from 'react';
import { project } from '../../data/Project';
import { BsGithub } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div className='w-[100%] mt-[100px]'>
            <div className='2xl:w-[80%] xl:w-[80%] lg:w-[80%] md:w-[85%] sm:w-[85%] w-[90%] mx-auto'>
                <div className='w-[100%] mx-auto'>
                    <h2 className='2xl:text-[40px] xl:text-[38px] lg:text-[36px] md:text-[34px] sm:text-[32px] text-[30px] text-white font-medium'>My Recent <span className='text-[#aa42c1]'>Works</span></h2>
                    <p className='text-[18px] text-white'>Here are a few projects I've worked on recently.</p>
                </div>
                <div className='w-[100%] mx-auto h-auto grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 mt-[50px]'>
                    {project.map((item, index) => (
                        <div key={index} className='w-[100%] h-[300px] border rounded-[10px] flex items-center justify-center custom-shadow custom-shadow-hover border-[#9821ad] cursor-pointer transform transition-transform duration-300 hover:translate-y-[-10px] hover:shadow-lg'>
                            <div className='w-[90%] h-[90%]'>
                                <div className='w-[100%] h-[50%] text-white flex items-center justify-center'><img src={item.img} alt="" className='w-[100%] h-[100%]' /></div>
                                <div className='w-[100%] h-[50%] text-white'>
                                    <h2 className='text-[20px] font-semibold mt-6'>{item.name}</h2>
                                    <div className='flex gap-2 items-center mt-4'>
                                        <Link to={item.github}><button className='flex gap-2 items-center bg-[#551161] rounded-[5px] px-2 py-1'><BsGithub />GitHub</button></Link>
                                        <Link to={item.link}><button className='flex gap-2 items-center bg-[#551161] rounded-[5px] px-2 py-1'><svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14 7C13.4477 7 13 7.44772 13 8V16C13 16.5523 13.4477 17 14 17H18C18.5523 17 19 16.5523 19 16V8C19 7.44772 18.5523 7 18 7H14ZM17 9H15V15H17V9Z" fill="currentColor"></path><path d="M6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9H10C10.5523 9 11 8.55228 11 8C11 7.44772 10.5523 7 10 7H6Z" fill="currentColor"></path><path d="M6 11C5.44772 11 5 11.4477 5 12C5 12.5523 5.44772 13 6 13H10C10.5523 13 11 12.5523 11 12C11 11.4477 10.5523 11 10 11H6Z" fill="currentColor"></path><path d="M5 16C5 15.4477 5.44772 15 6 15H10C10.5523 15 11 15.4477 11 16C11 16.5523 10.5523 17 10 17H6C5.44772 17 5 16.5523 5 16Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4 3C2.34315 3 1 4.34315 1 6V18C1 19.6569 2.34315 21 4 21H20C21.6569 21 23 19.6569 23 18V6C23 4.34315 21.6569 3 20 3H4ZM20 5H4C3.44772 5 3 5.44772 3 6V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V6C21 5.44772 20.5523 5 20 5Z" fill="currentColor"></path></svg>Demo</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;
