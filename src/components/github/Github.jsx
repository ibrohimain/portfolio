import React from 'react';
import GitHubCalendar from 'react-github-calendar';

const Github = () => {
    return (
        <div className='w-[100%] mt-10'>
            <div className='w-[80%] h-[400px] mx-auto text-white'>
                <h2 className='text-[40px] font-semibold mb-6'>Days I <span className='text-[#9821ad]'>Code</span></h2>
                <div className='w-[100%] flex items-center justify-center '>
                    <div className='w-[90%] mx-auto'><GitHubCalendar
                        username="ibrohimain"
                        sx={{ width: "100%" }}
                        style={{ width: '100%', }}
                        containerStyle={{ width: '100%' }}
                        blockSize={17.5}
                        blockMargin={3}
                    /></div>
                </div>
            </div>
        </div>
    );
}

export default Github;
