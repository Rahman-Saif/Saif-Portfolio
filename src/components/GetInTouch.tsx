import React from 'react';

const GetInTouch = () => {
    return (
        <div className='bg-cover bg-center text-white h-screen w-screen'
        style={{backgroundImage:`url('/public/images/6.jpg')`}}
        >
            <div className='text-center '>
                <h1 className='pt-20 text-5xl'>Contact Me</h1>
                <p className='mt-4'>Have a sweet project in mind or just want to say hi?<br></br> Feel free to send me a message!</p>
            </div>
            <div className='flex items-center justify-center flex-col mt-20'>
              
                <div className="mb-4 flex flex-col gap-2">
      <label className=" text-sm font-bold mb-2" >
        Name
      </label>
      <input className=" appearance-none bg-transparent border-b-2 rounded w-[700px] py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
    </div>
    <div className="mb-4 flex flex-col gap-2">
      <label className="block text-gray-700 text-sm font-bold mb-2" >
        Email
      </label>
      <input className=" appearance-none bg-transparent border-b-2 rounded w-[700px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" >
        Subject
      </label>
      <input className=" appearance-none bg-transparent border-b-2 rounded w-[700px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" >
        Message
      </label>
      <input className=" appearance-none bg-transparent border-b-2 rounded w-[700px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
    </div>
            
            <div>
                <button className='border-blue-950 border-2 rounded-md p-2 text-white bg-gray-700 mt-4'>Send Message</button>
            </div>
        </div>
        </div>
    );
};

export default GetInTouch;