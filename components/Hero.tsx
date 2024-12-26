import React from 'react'
import '../app/globals.css';
import { MeteorDemo } from './magicui/meteors';
import { Spotlight } from './ui/spotlight';
import { TypewriterEffectSmoothDemo } from './magicui/TypeWriter';
import Button from './ui/Button';
import Link from 'next/link';
import {
  IconMail,
  IconPhoneCall
} from "@tabler/icons-react";



const Hero = () => {
  return (
    <div id='hero' className=" min-h-screen w-full px-4 md:px-16 lg:px-72 py-16 md:py-6 ">
      <div className='text-gray-500 md:pb-20 flex justify-between'>
      <button
          className="relative group/btn flex space-x-2 items-center justify-start px-4 py-2 rounded-md font-medium bg-zinc-900 text-neutral-300 shadow-lg hover:shadow-xl transition-all"
          type="button"
        >
          <IconPhoneCall />

          <span>7667845540</span>
        </button>
        <button
          className="relative group/btn flex space-x-2 items-center justify-start px-4 py-2 rounded-md font-medium bg-zinc-900 text-neutral-300 shadow-lg hover:shadow-xl transition-all"
          type="button"
        >
        <Link
            href="mailto:afjalhsn85@gmail.com" // Replace with your actual email
            className="flex space-x-2"
          >
            <IconMail/>
            <span>afjalhsn85@gmail.com</span>
          </Link>
          
        </button>
        
      </div>
      <div className=''>
      <Spotlight className='top-16  left-10 md:left-32 md:top-20 h-screen' fill="white"/>
      
      </div>
      
      <div className="flex flex-col items-center justify-start">
      <div className='-pt-6 md:-pt-32 md:pb-15  flex items-center text-center'><Button/></div>
        <MeteorDemo />
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-center md:gap-4 sm:py-4 items-center mt-10 md:mt-0">
        <div className="text-start md:text-left md:px-4 md:w-1/2">
          <div className="text-m px-8 sm:px-0 font-sans text-white dark:text-white">
          An aspiring software developer, with a 
          strong passion for learning and exploring new technologies. Dedicated to identifying 
          people's pain points and solving them through innovative software and product solutions. 
          Eager to leverage technical skills and entrepreneurial vision to build impactful solutions. 
          {/* and establish a successful business.with a passion for building creative proand efficient applications */}
            {/* I&apos;m a 21-year-old BCS student and aspiring full-stack developer. I&apos;m skilled in React, Node.js, and the MERN stack, with a passion for building creative and efficient applications. Currently, I&apos;m focused on honing my development skills and exploring new skills. */}
          </div>
        </div>
        <div className="px-4 mb-6 md:mb-0">
          <img
            className="rounded-full h-35 w-35 md:h-40 md:w-40 lg:h-44 lg:w-44 object-cover"
            src="https://img.freepik.com/premium-vector/boy-with-shirt-that-says-hes-character_1230457-34191.jpg?w=360"
            alt="profile_pic"
          />
        </div>
      </div>

      <div>
          <TypewriterEffectSmoothDemo/>
      </div>
     
      {/* <div className='py-32 flex items-center justify-center'>
        <Link href="https://bento.me/karan-dev"><SafariDemo/></Link>
      </div> */}
      
    </div>

  )
}

export default Hero
