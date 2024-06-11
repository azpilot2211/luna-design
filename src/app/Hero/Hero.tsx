import React from 'react'
import Heroman from '../../../public/superhero1.webp';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className='flex w-full justify-between items-start px-[5%] py-[1%]'>
      <div className='flex w-3/5 justify-start items-start flex-col pt-32'>
        <h1 className='text-8xl font-extrabold pb-8 text-[#4D1427]'>Elevate Your Online Presence with Our Expertise.</h1>
        <h2 className='text-4xl pb-4'>Let&apos;s Craft Your Digital Success Story Together!</h2>
        <p>Welcome to Luna Design &dash; Your Premier Destination for Stunning Web Design and Development Solutions!</p>
        <div className='flex gap-4 mt-4'>
            <Button className='bg-[#F44C41] text-white w-fit h-[32px] p-8 text-2xl'>Pricing and Plans</Button>
            <Button className='bg-[#A0A0A0] text-white w-fit h-[32px] p-8 text-2xl'>See Our Work</Button>
        </div>
      </div>
      <div className='flex w-2/5 justify-end items-end'>
        <Image src={Heroman} alt="Hero Image" />
      </div>
    </div>
  )
}

export default Hero
