import React from 'react';

const Description = () => {
    return (
        <div className='flex p-28 items-center justify-between gap-14 bg-black'>
            <div className="w-3/5 text-white">
                <h1 className='text-5xl'>Hey,I'm Saif </h1>
                <h1 className='text-3xl mt-7 mb-7 font-bold'>I'm a design-minded, detail oriented software engineer passionate about combining 
                    beautiful code with beautiful design.
                </h1>
                <p>I'm a fourth year student at Northeastern University in Boston studying computer science and interaction design. 
                    I have experience developing and designing software for the web, from simple landing pages to progressive web applications. 
                    I strive to create software that not only functions efficiently under the hood, but also provides intuitive, pixel-perfect user experiences.
                    I love learning new and better ways to create seamless user experiences with clean, efficient, and scalable code. I consider work an ongoing 
                    education, and I'm always looking for opportunities to work with those who are willing to share their knowledge as much as I want to learn. 
                    At the end of the day, my primary goal is to create something beautiful with people that bring out the best in me.
                    When I'm not in front of a computer screen, I'm probably snowboarding, traveling, petting dogs, or learning a new song on my uke.
                </p>
            </div>
            <div className="w-2/5 ">
                <img src="/public/images/saif.jpg" alt="" className='ml-28 w-96 h-96 rounded-full object-cover'/>
            </div>
            
        </div>
    );
};

export default Description;