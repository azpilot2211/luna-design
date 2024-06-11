import React from 'react'
import { Menu } from 'lucide-react';
import LunaLogo from '../../../public/lunadesign.png';
import Image from 'next/image';

const Drawer = () => {
  return (
    <div className="drawer">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer" className="btn bg-[#ffffff] border-[#cccccc] drawer-button"><Menu /></label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu p-4 w-[25%] min-h-full bg-base-200 text-base-content flex justify-start items-center pt-10">
      {/* Sidebar content here */}
        <li><Image src={LunaLogo} alt='Luna Design' className='mb-5'></Image></li>
        <li className='text-2xl'><a>Prices</a></li>
        <li className='text-2xl'><a>Dev Tools</a></li>
        <li className='text-2xl'><a>Inspiration</a></li>
        <li className='text-2xl'><a>Our Clients</a></li>
        <li className='text-2xl'><a>Contact Us</a></li>
    </ul>
  </div>
</div>
  )
}

export default Drawer
