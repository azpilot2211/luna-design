import React from 'react'
import Heroman from '../../../public/hero-man.png';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className='flex w-full justify-between items-center px-[5%] py-[1%]'>
      <div className='flex w-3/5 justify-start items-start flex-col'>
        <h1 className='text-8xl font-extrabold pb-8 text-[#4D1427]'>Elevate Your Online Presence with our Expertise.</h1>
        <h2 className='text-4xl pb-4'>Let's Craft Your Digital Success Story Together!</h2>
        <p>Welcome to Luna Design – Your Premier Destination for Stunning Web Design and Development Solutions!</p>
        <div className='flex gap-4'>
            <Button>Pricing and Plans</Button>
            <Button>See Our Work</Button>
        </div>
      </div>
      <div className='flex w-2/5 justify-end items-end'>
        <Image src={Heroman} alt="Hero Image" />
      </div>
    </div>
  )
}

export default Hero
