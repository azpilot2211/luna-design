import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Adobe from "../../../public/Adobecc.png";
import Sketch from "../../../public/Sketch.png";
import Figma from "../../../public/figma.png";
import Invision from '../../../public/invision.png';
import HTML from '../../../public/html.png';
import Reactimg from '../../../public/react.png';
import Nodeimg from '../../../public/node.png';
import Wordpress from '../../../public/wordpress.png';
import Jira from '../../../public/jira.png';
import Github from '../../../public/github.png';
import Slack from '../../../public/slack.png';
import Image from "next/image"; 

const Programming = () => {
  return (
    <div className='flex flex-col w-full mx-auto justify-center items-center px-[5%] py-[1%] pb-6'>
        <h4 className='text-5xl font-bold w-[70%] text-center mt-40'>Our Cutting-Edge Toolbox for Design and Programming</h4>
        <p className='text-2xl text-center w-[90%] mt-8 mb-20'>At Luna Design, we believe in harnessing the power of the latest technologies and tools to deliver exceptional web design and programming solutions. Our expert team utilizes a comprehensive set of industry-leading tools to ensure the success of every project:</p>
      <Tabs defaultValue="design" className="w-full">
      <TabsList className="grid w-full grid-cols-3 gap-4 bg-slate-100 shadow-lg px-1">
        <TabsTrigger value="design" className='bg-[#F44C41] text-black text-2xl font-light'>Design Tools</TabsTrigger>
        <TabsTrigger value="programming" className='bg-[#F44C41] text-black text-2xl font-light'>Programming Tools</TabsTrigger>
        <TabsTrigger value="project" className='bg-[#F44C41] text-black text-2xl font-light'>Project Management</TabsTrigger>
      </TabsList>
      <TabsContent value="design">
        <Card>
          <CardHeader>
            <CardTitle className='flex justify-center mt-8 mb-8'>Design Tools</CardTitle>
          </CardHeader>
          <div className='flex mb-20 mt-10 gap-8 p-8'>
          <CardContent className="space-y-2 shadow-xl">
            <div className='flex flex-col justify-center items-center mt-4'>
              <Image src={Adobe} alt='Adobe Creative Cloud' className='w-20 h-20' />
            </div>
            <div className='flex flex-col justify-center items-center'>
                <h4 className='font-bold mt-4'>Adobe Creative Suite</h4>
                <p className='text-center mt-2'>We leverage the power of Adobe Photoshop, Illustrator, and XD to create stunning visual designs that perfectly align with your brand identity.</p>
            </div>
          </CardContent>
          <CardContent className="space-y-2 shadow-xl">
            <div className='flex flex-col justify-center items-center mt-4'>
              <Image src={Sketch} alt='Sketch' className='w-20 h-20' />
            </div>
            <div className='flex flex-col justify-center items-center'>
                <h4 className='font-bold mt-4'>Sketch</h4>
                <p className='text-center mt-2'>Our designers utilize Sketch to craft intuitive and pixel-perfect interfaces, ensuring an exceptional user experience across all devices.</p>
            </div>
          </CardContent>
          <CardContent className="space-y-2 shadow-xl">
            <div className='flex flex-col justify-center items-center mt-4'>
              <Image src={Figma} alt='Figma' className='w-20 h-20' />
            </div>
            <div className='flex flex-col justify-center items-center'>
                <h4 className='font-bold mt-4'>Figma</h4>
                <p className='text-center mt-2'>Collaborative design is made easy with Figma, allowing our team to work seamlessly together and iterate efficiently on design concepts.</p>
            </div>
          </CardContent>
          <CardContent className="space-y-2 shadow-xl">
            <div className='flex flex-col justify-center items-center mt-4'>
              <Image src={Invision} alt='InVision' className='w-20 h-20' />
            </div>
            <div className='flex flex-col justify-center items-center'>
                <h4 className='font-bold mt-4'>InVision</h4>
                <p className='text-center mt-2'>With InVision, we create interactive prototypes that provide a realistic preview of the final product, enabling you to visualize and provide feedback early in the design process.</p>
            </div>
          </CardContent>
          </div>
        </Card>
      </TabsContent>
      <TabsContent value="programming">
      <Card>
          <CardHeader>
            <CardTitle className='flex justify-center mt-8 mb-8'>Programming Tools</CardTitle>
          </CardHeader>
          <div className='flex mb-20 mt-10 gap-8 p-8'>
          <CardContent className="space-y-2 shadow-xl">
            <div className='flex flex-col justify-center items-center mt-4'>
              <Image src={HTML} alt='HTML CSS and Javascript' className='w-20 h-20' />
            </div>
            <div className='flex flex-col justify-center items-center'>
                <h4 className='font-bold mt-4'>HTML/CSS/JavaScript</h4>
                <p className='text-center mt-2'>The foundation of web development, we use these languages to build responsive and feature-rich websites that engage your audience.</p>
            </div>
          </CardContent>
          <CardContent className="space-y-2 shadow-xl">
            <div className='flex flex-col justify-center items-center mt-4'>
              <Image src={Reactimg} alt='React' className='w-20 h-20' />
            </div>
            <div className='flex flex-col justify-center items-center'>
                <h4 className='font-bold mt-4'>React.js/Vue.js/Angular</h4>
                <p className='text-center mt-2'> For dynamic and interactive web applications, we harness the power of modern JavaScript frameworks such as React.js, Vue.js, and Angular.</p>
            </div>
          </CardContent>
          <CardContent className="space-y-2 shadow-xl">
            <div className='flex flex-col justify-center items-center mt-4'>
              <Image src={Nodeimg} alt='Node JS' className='w-20 h-20' />
            </div>
            <div className='flex flex-col justify-center items-center'>
                <h4 className='font-bold mt-4'>Node.JS</h4>
                <p className='text-center mt-2'>Our back-end development is powered by Node.js, enabling us to build scalable and efficient server-side applications.</p>
            </div>
          </CardContent>
          <CardContent className="space-y-2 shadow-xl">
            <div className='flex flex-col justify-center items-center mt-4'>
              <Image src={Wordpress} alt='Wordpress' className='w-20 h-20' />
            </div>
            <div className='flex flex-col justify-center items-center'>
                <h4 className='font-bold mt-4'>Wordpress</h4>
                <p className='text-center mt-2'>For content management and e-commerce solutions, we leverage the flexibility and robustness of WordPress to deliver tailored websites that meet your specific requirements.</p>
            </div>
          </CardContent>
          </div>
        </Card>
      </TabsContent>
      <TabsContent value="project">
      <Card>
          <CardHeader>
            <CardTitle className='flex justify-center mt-8 mb-8'>Project Management</CardTitle>
          </CardHeader>
          <div className='flex mb-20 mt-10 gap-8 p-8'>
          <CardContent className="space-y-2 shadow-xl">
            <div className='flex flex-col justify-center items-center mt-4'>
              <Image src={Jira} alt='Jira' className='w-20 h-20' />
            </div>
            <div className='flex flex-col justify-center items-center'>
                <h4 className='font-bold mt-4'>Jira</h4>
                <p className='text-center mt-2'>We use Jira for project management, allowing us to plan, track, and prioritize tasks effectively throughout the development lifecycle.</p>
            </div>
          </CardContent>
          <CardContent className="space-y-2 shadow-xl">
            <div className='flex flex-col justify-center items-center mt-4'>
              <Image src={Slack} alt='Slack' className='w-20 h-20' />
            </div>
            <div className='flex flex-col justify-center items-center'>
                <h4 className='font-bold mt-4'>Slack</h4>
                <p className='text-center mt-2'>Seamless communication is key to project success, and Slack enables our team to collaborate in real-time, share updates, and address any issues promptly.</p>
            </div>
          </CardContent>
          <CardContent className="space-y-2 shadow-xl">
            <div className='flex flex-col justify-center items-center mt-4'>
              <Image src={Github} alt='GitHub' className='w-20 h-20' />
            </div>
            <div className='flex flex-col justify-center items-center'>
                <h4 className='font-bold mt-4'>GitHub</h4>
                <p className='text-center mt-2'>Version control is essential for collaborative development, and we utilize platforms like GitHub or GitLab to manage code repositories.</p>
            </div>
          </CardContent>
          </div>
        </Card>
      </TabsContent>
    </Tabs>
    </div>
  )
}

export default Programming
