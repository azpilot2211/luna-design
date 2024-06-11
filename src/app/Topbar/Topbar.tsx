import Image from 'next/image'
import React from 'react'
import Logo from '../../../public/logonew.png';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { Avatar } from '@/components/ui/avatar';
import Drawer from '../Drawer/Drawer';
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

const topbar = () => {
  return (
    <ClerkProvider>  
    <div className='flex w-full h-32 justify-between items-center px-[5%] py-[1%]'>
      <div className='flex justify-center items-center'>
        <Image src={Logo} alt='LunaDesign' />
        <p className='text-3xl font-bold text-[#4D1427] ml-2'>Luna<span className='text-[#F44C41]'>Design</span></p>
      </div>
      <div className='flex gap-x-4 justify-end items-center'>
        <SignedOut><SignInButton /></SignedOut><SignedIn><UserButton  /></SignedIn>
        <Drawer />
      </div>
    </div>
    </ClerkProvider>
  )
}

export default topbar
