import React, { useState } from 'react';
import { BsTelegram } from 'react-icons/bs';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import workimg from '../../assets/work-img.png';

const MySelf = () => {
    const [rotation, setRotation] = useState({ rotateX: 0, rotateY: 0 });

    const handleMouseMove = (e) => {
        const { offsetWidth: width, offsetHeight: height } = e.currentTarget;
        const { offsetX: x, offsetY: y } = e.nativeEvent;

        const rotateX = ((y / height) - 0.5) * 30; // Adjust the multiplier to control the rotation intensity
        const rotateY = ((x / width) - 0.5) * -30;

        setRotation({ rotateX, rotateY });
    };

    const handleMouseLeave = () => {
        setRotation({ rotateX: 0, rotateY: 0 });
    };

    return (
        <div className="w-[100%] mt-10 pb-24">
            <div className="2xl:w-[80%] xl:w-[80%] lg:w-[80%] md:w-[85%] sm:w-[85%] w-[90%] h-auto mx-auto 2xl:flex xl:flex lg:flex  items-center">
                <div className="2xl:w-[60%] xl:w-[60%] lg:w-[60%] md:w-[100%] sm:w-[100%] w-[100%]">
                    <div className="w-full flex items-center justify-center">
                        <h2 className="text-white 2xl:text-[50px] xl:text-[47px] lg:text-[44px] md:text-[41px] sm:text-[37px] text-[33px] text-center">
                            LET ME <span className="text-purple-600 font-semibold">INTRODUCE</span> MYSELF
                        </h2>
                    </div>
                    <p className="text-white text-xl mt-10">
                        Programming teaches thinking.
                    </p>
                    <p className="text-white text-xl mt-10">
                        The languages ​​I know well are <span className="text-purple-600">Javascript, TypeScript, HTML, CSS.</span>
                    </p>
                    <p className="text-white 2xl:text-[18px] xl:text-[17px] lg:text-[16px] md:text-[15px] sm:text-[14px] text-[14px] mt-10">
                        With over 1 year of experience in the IT industry, I specialize in developing enterprise solutions across various domains including technology, CRM, and e-commerce platforms. My expertise lies in designing scalable and secure applications, ensuring efficient performance in diverse operational environments.
                    </p>
                </div>
                <div className="2xl:w-[40%] xl:w-[40%] lg:w-[40%] md:w-[100%] sm:w-[100%] w-[100%] mt-20 flex">
                    <div className="mt-10 w-[100%] h-[100%] flex justify-center items-center">
                        <div
                            className="w-[80%] h-[90%] rounded-[50%] flex items-center justify-center"
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            style={{
                                transform: `perspective(1000px) rotateX(${rotation.rotateX}deg) rotateY(${rotation.rotateY}deg)`,
                                transition: 'transform 0.1s ease-out',
                                boxShadow: ' 0 10px 10px rgba(255, 255, 255, 0.1)', // Add white shadow with opacity
                            }}
                        >
                            <img src={workimg} alt="Work" className="2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[50%] sm:w-[50%] w-[100%] h-[100%]" />
                        </div>
                    </div>
                </div>

            </div>
            <div className='w-[100%] mt-[100px]'>
                <div className='w-[60%] mx-auto flex flex-col justify-center items-center'>
                    <h2 className="text-2xl text-white text-center">FIND ME ON</h2>
                    <p className="text-white mt-4 text-center">
                        Feel free to <span className="text-purple-600 font-semibold">connect</span> with me
                    </p>
                    <ul className="flex gap-7 mt-6">
                        <li className="w-11 cursor-pointer h-11 bg-white rounded-full flex items-center justify-center">
                            <BsTelegram className="text-purple-600 text-xl" />
                        </li>
                        <li className="w-11 cursor-pointer h-11 bg-white rounded-full flex items-center justify-center">
                            <FaLinkedinIn className="text-purple-600 text-xl" />
                        </li>
                        <li className="w-11 cursor-pointer h-11 bg-white rounded-full flex items-center justify-center">
                            <FaInstagram className="text-purple-600 text-xl" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MySelf;
