import { Button } from '@mui/material'
import React from 'react'
import { BiUser } from 'react-icons/bi'
import { GiHamburgerMenu } from 'react-icons/gi'
import { PiProjectorScreenChartDuotone } from 'react-icons/pi'
import { SiGoogledocs } from 'react-icons/si'

const Header = () => {
    return (
        <div className='w-[100%] h-[70px] header fixed top-0 z-30'>
            <div className='2xl:w-[80%] xl:w-[80%] lg:w-[80%] md:w-[85%] sm:w-[85%] w-[90%] h-[100%] mx-auto flex items-center justify-between'>
                <div className='flex items-center'>
                    <h2 className='logo'>Abun.dev</h2>
                </div>
                <div className='items-center gap-10 2xl:flex xl:flex lg:flex md:flex sm:hidden hidden'>
                    <ul className='flex gap-10'>
                        <li className='cursor-pointer text-white link'><BiUser /> About</li>
                        <li className='cursor-pointer text-white link'><PiProjectorScreenChartDuotone /> Projects</li>
                        <li className='cursor-pointer text-white link'><SiGoogledocs /> Resume</li>
                    </ul>
                    <Button className='link' variant="contained" sx={{ borderRadius: "20px", fontSize: "14px" }}>Contact</Button>
                </div>
                <div className='2xl:hidden xl:hidden lg:hidden md:hidden sm:block block'>
                    <GiHamburgerMenu className='text-white text-[36px] ' />
                </div>
            </div>
        </div>
    )
}

export default Header
