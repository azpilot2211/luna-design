import Image from 'next/image'
import React from 'react'
import Logo from '../../../public/logonew.png';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { Avatar } from '@/components/ui/avatar';

const topbar = () => {
  return (
    <div className='flex w-full h-32 justify-between items-center px-[5%] py-[1%]'>
      <div className='flex justify-center items-center'>
        <Image src={Logo} alt='LunaDesign' />
        <p className='text-3xl font-bold text-[#4D1427] ml-2'>Luna<span className='text-[#3C71E7]'>Design</span></p>
      </div>
      <div className='flex gap-x-4 justify-end items-center'>
        <Avatar className='bg-[#3C71E7] w-8 h-8 cursor-pointer flex justify-center items-center text-xl text-white font-bold'>M</Avatar>
        <Button variant="outline" size="icon"><Menu /></Button>
      </div>
    </div>
  )
}

export default topbar
