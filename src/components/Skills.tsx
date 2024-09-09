import React from 'react';
import { FaGear } from "react-icons/fa6";
import { SiAffinitydesigner } from "react-icons/si";
import { SiAdobeindesign } from "react-icons/si";
import { FaFigma } from "react-icons/fa6";
import { SiCanva } from "react-icons/si";
import { LiaToolsSolid } from "react-icons/lia";
import { HiLightBulb } from "react-icons/hi";





const Skills = () => {
    return (
        <div className='w-screen h-screen bg-black text-white p-16'>
            <h1 className='text-5xl mb-6'>Skills</h1>
            <div className="flex  gap-64 p-12">
                <div className="">
                    <div className='flex items-center gap-2 mt-4 mb-4'>
                        <FaGear className='text-3xl'></FaGear>
                        <p className='text-3xl'>DEVELOPMENT</p>
                    </div>
                    <div className='flex flex-wrap w-[280px] gap-5 mt-10'>
                        <div className="border rounded-full object-cover h-20  w-20   flex items-center justify-center">
                            Javascript
                        </div>
                        <div className="border rounded-full object-cover h-20 w-20 flex items-center justify-center">
                            Javascript
                        </div>
                        <div className="border rounded-full object-cover h-20 w-20 flex items-center justify-center">
                            Javascript
                        </div>
                        <div className="border rounded-full object-cover h-20 w-20 flex items-center justify-center">
                            Javascript
                        </div>
                        <div className="border rounded-full object-cover h-20 w-20 flex items-center justify-center">
                            Javascript
                        </div>
                        <div className="border rounded-full object-cover h-20 w-20 flex items-center justify-center">
                            Javascript
                        </div>
                        <div className="border rounded-full object-cover h-20 w-20 flex items-center justify-center">
                            Javascript
                        </div>
                        <div className="border rounded-full object-cover h-20 w-20 flex items-center justify-center">
                            Javascript
                        </div>
                        <div className="border rounded-full object-cover h-20 w-20 flex items-center justify-center">
                            Javascript
                        </div>

                    </div>
                </div>
                <div className="">
                    <div className='flex items-center gap-2'>
                         <SiAffinitydesigner className='text-3xl'></SiAffinitydesigner>
                         <p className='text-4xl'>Design</p>
                    </div>
                   <div className='flex mt-5 mb-5 items-center gap-7'>
                    <SiAdobeindesign className='text-4xl'></SiAdobeindesign>
                    <FaFigma className='text-4xl'></FaFigma>
                    <SiCanva className='text-4xl'></SiCanva>
                   </div>
                    <div className='flex items-center gap-48'>
                        <div className=''>
                            <div className='flex items-center'>
                                <LiaToolsSolid className='text-3xl'></LiaToolsSolid>
                                <p className='text-3xl'>TOOLS</p>
                            </div>
                            <div className='ml-10'>
                                <ul className='list-square mt-4'>
                                    <li className='mt-2'>Git+Github</li>
                                    <li className='mt-2'>Chrome Dev Tools</li>
                                    <li className='mt-2'>Command line</li>
                                    <li className='mt-2'>Gulps</li>
                                    <li className='mt-2'>PostMan</li>
                                </ul>
                            </div>
                            
                        </div>
                        <div>
                            <div className="flex items-center">
                                <HiLightBulb className='text-3xl'></HiLightBulb>
                                <p className='text-3xl'>KNOWLEDGE</p>
                            </div>
                            <div className="ml-10">
                            <ul className='list-square mt-4'>
                                    <li className='mt-2'>Git+Github</li>
                                    <li className='mt-2'>Chrome Dev Tools</li>
                                    <li className='mt-2'>Command line</li>
                                    <li className='mt-2'>Gulps</li>
                                    <li className='mt-2'>PostMan</li>
                                </ul>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Skills;