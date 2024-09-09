import React from 'react';
import { RiCodeBoxLine } from "react-icons/ri";
import { GiPencilRuler } from "react-icons/gi";
import { CgWebsite } from "react-icons/cg";
import { TbWorld } from "react-icons/tb";



const What_i_do = () => {
    return (
        <div className='bg-cover bg-center h-screen text-white ' style={{backgroundImage: `url('/public/images/4.jpg')`}}>
            <div className='p-24'>
            <h1 className='text-5xl mb-14'>What I Do</h1>
            {/* <div className="flex items-center justify-center p-12" >
                <div className='border-r-4 border-indigo-500'>
                    <section className='border-b-4 border-indigo-500'>
                    <div className="flex">
                        <RiCodeBoxLine></RiCodeBoxLine>
                        <p>Web Development</p>
                    </div>
                    <p>Using HTML, CSS, and JavaScript with pre-processors and build tools such as 
                        Sass and Grunt, I have a passion for developing pixel-perfect websites and apps 
                        while maintaining a semantic, modular, and DRY code base.
                    </p>    
                </section>
                <section>
                    <div className="flex">
                        <GiPencilRuler></GiPencilRuler>
                        <p>Responsive UI Design</p>
                    </div>
                    <p>"A user interface is like a joke. If you have to explain it, it's not that good." I strive to 
                        develop and implement responsive and aesthetically pleasing interfaces for websites and apps that
                         adapt to any type of device, platform, or browser.</p>
                </section>
                </div>
                <div >
                    <section className='border-b-4 border-indigo-500'>
                    <div className="flex">
                        <CgWebsite></CgWebsite>
                        <p>Experience Design</p>
                    </div>
                    <p>There have been far too many times where I've been trying to accomplish a simple task on a website, and 
                        ended up wanting to throw my computer out the window in frustration. Needless to say, user experience is
                         an aspect of software I believe is vital to a successful product.</p>
                </section>
                <section>
                    <div className="flex">
                        <TbWorld></TbWorld>
                        <p>Diversity in Tech</p>
                    </div>
                    <p>Beyond coding, I am a strong advocate for diversity in the tech industry, especially for women. I currently serve as
                         President for Northeastern's women in tech club, NUWIT, and was a 2016 Grace Hopper Conference Scholar.</p>
                </section>
                </div>
                
            </div> */}
            <table className=" ml-9 h-[500px] ">
                <tr>
      <td className="border-r-2 border-x-white ">
        <section className='p-5'>
                    <div className="flex items-center gap-2 mb-5 mt-5">
                        <RiCodeBoxLine className='text-5xl'></RiCodeBoxLine>
                        <p className='text-3xl'>Web Development</p>
                    </div>
                    <p className=''>Using HTML, CSS, and JavaScript with pre-processors and build tools such as 
                        Sass and Grunt, I have a passion for developing pixel-perfect websites and apps 
                        while maintaining a semantic, modular, and DRY code base.
                    </p>    
                </section>
      </td>
      <td className="border-b-2  border-x-white ">
        <section className='p-5'>
                    <div className="flex items-center gap-2 mb-5 mt-5">
                        <GiPencilRuler className='text-5xl'></GiPencilRuler>
                        <p className='text-3xl'>Responsive UI Design</p>
                    </div>
                    <p>"A user interface is like a joke. If you have to explain it, it's not that good." I strive to 
                        develop and implement responsive and aesthetically pleasing interfaces for websites and apps that
                         adapt to any type of device, platform, or browser.</p>
                </section>
      </td>
    </tr>
        <tr>
            <td className="border-t-2 border-r-2 border-x-white  ">
                <section className='p-5'>
                    <div className="flex items-center gap-2 mb-5 mt-5">
                        <CgWebsite className='text-5xl'></CgWebsite>
                        <p className='text-3xl'>Experience Design</p>
                    </div>
                    <p>There have been far too many times where I've been trying to accomplish a simple task on a website, and 
                        ended up wanting to throw my computer out the window in frustration. Needless to say, user experience is
                         an aspect of software I believe is vital to a successful product.</p>
                </section>
            </td>
            <td className=" ">
            <section className='p-5'>
                    <div className="flex items-center gap-2 mb-5 mt-5">
                        <TbWorld className='text-5xl'></TbWorld>
                        <p className='text-3xl'>Diversity in Tech</p>
                    </div>
                    <p>Beyond coding, I am a strong advocate for diversity in the tech industry, especially for women. I currently serve as
                         President for Northeastern's women in tech club, NUWIT, and was a 2016 Grace Hopper Conference Scholar.</p>
                </section>
            </td>
        </tr>
            </table>
        </div>
        </div>
    );
};

export default What_i_do;