import React from 'react';

const Banner = () => {
    return (
        <div className="bg-cover bg-center h-screen" 
         style={{backgroundImage: `url('/public/images/1.jpg')`}}>
            <div className="banner-texts text-center flex flex-col items-center justify-center h-full w-full text-white ">
                <h1 className='text-6xl	'>Md Saif Rahman</h1>
                <h1 className='text-4xl mt-6'>FrontEnd Software Engineer</h1>
            </div>
         </div>
        
    );
};

export default Banner;