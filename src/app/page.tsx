import Image from "next/image";
import Hero from '../app/Hero/Hero';
import Programming from "../app/Programming/Programming";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Check } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"


export default function Home() {
  return (
    <div>
      <Hero />
      <div className="flex flex-col w-full justify-between items-center px-[5%] py-[1%] mt-12">
        <h3 className="text-5xl font-bold w-[70%] text-center">Discover Our Tailored Web Design & Development Packages</h3>
        <h4 className="text-2xl text-center mt-8">Choose the Perfect Plan to Elevate Your Online Presence and Achieve Your Business Goals</h4>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full h-full justify-between items-start px-[5%] py-[1%] mt-24 gap-8 md:gap-y-20">
        <Card className="flex flex-col justify-stretch items-center shadow-xl h-full">
          <CardHeader className="flex flex-col justify-center items-center mb-8">
            <CardTitle>Intro Package</CardTitle>
          </CardHeader>
          <div className="h-[28rem]">
            <CardContent className="flex gap-4">
              <Button variant="outline" size="icon"><Check /></Button><p>Ideal for startups and small businesses.</p>
            </CardContent>
            <CardContent className="flex gap-4">
              <Button variant="outline" size="icon"><Check /></Button><p>Responsive and user-friendly website design.</p>
            </CardContent>
            <CardContent className="flex gap-4">  
              <Button variant="outline" size="icon"><Check /></Button><p>Basic features to establish your online presence.</p>
            </CardContent>
            <CardContent className="flex gap-4">  
              <Button variant="outline" size="icon"><Check /></Button><p>Affordable pricing to kickstart your digital journey.</p>
            </CardContent>
          </div>
          <CardFooter className="flex flex-col justify-center items-center mt-8">
            <div className="">
              <p className="font-bold text-3xl mb-4 text-center">$599</p>
              <Button size="lg" className="bg-[#F44C41]">CHOOSE</Button>
            </div>
          </CardFooter>
        </Card>
        <Card className="flex flex-col justify-start items-center shadow-xl h-full">
          <CardHeader className="flex flex-col justify-stretch items-center mb-8">
            <CardTitle>Base Package</CardTitle>
          </CardHeader>
          <div className="h-[28rem]">
            <CardContent className="flex gap-4">
              <Button variant="outline" size="icon"><Check /></Button><p>Perfect for growing businesses and entrepreneurs.</p>
            </CardContent>
            <CardContent className="flex gap-4">
              <Button variant="outline" size="icon"><Check /></Button><p>Customized website design tailored to your brand.</p>
            </CardContent>
            <CardContent className="flex gap-4">  
              <Button variant="outline" size="icon"><Check /></Button><p>Enhanced functionality with additional features.</p>
            </CardContent>
            <CardContent className="flex gap-4">  
              <Button variant="outline" size="icon"><Check /></Button><p>SEO optimization for better online visibility.</p>
            </CardContent>
            <CardContent className="flex gap-4">  
              <Button variant="outline" size="icon"><Check /></Button><p>Reliable support to keep your website running smoothly.</p>
            </CardContent>
          </div>
          <CardFooter className="flex flex-col justify-center items-center mt-8">
            <p className="font-bold text-3xl mb-4 text-center">$999</p>
            <Button size="lg" className="bg-[#F44C41]">CHOOSE</Button>
          </CardFooter>
        </Card>
        <Card className="flex flex-col justify-start items-center shadow-xl h-full bg-[#F44C41] text-white">
          <CardHeader className="flex flex-col justify-stretch items-center mb-8">
            <CardTitle className="text-white">PRO Package</CardTitle>
          </CardHeader>
          <div className="h-[28rem]">
            <CardContent className="flex gap-4 text-white">
              <Button variant="ghost" size="icon"><Check /></Button><p>Designed for established businesses and e-commerce ventures.</p>
            </CardContent>
            <CardContent className="flex gap-4 text-white">
              <Button variant="ghost" size="icon"><Check /></Button><p>Advanced website features for optimal performance.</p>
            </CardContent>
            <CardContent className="flex gap-4 text-white">  
              <Button variant="ghost" size="icon"><Check /></Button><p>Comprehensive SEO strategy to drive organic traffic.</p>
            </CardContent>
            <CardContent className="flex gap-4 text-white">  
              <Button variant="ghost" size="icon"><Check /></Button><p>Integration of e-commerce capabilities for online sales.</p>
            </CardContent>
            <CardContent className="flex gap-4 text-white">  
              <Button variant="ghost" size="icon"><Check /></Button><p>Priority support and maintenance for uninterrupted operation.</p>
            </CardContent>
          </div>
          <CardFooter className="flex flex-col justify-stretch items-center mt-8">
            <p className="font-bold text-3xl mb-4 text-center text-white">$1399</p>
            <Button size="lg" className="bg-[#FFFFFF] text-black hover:text-white">CHOOSE</Button>
          </CardFooter>
        </Card>
        <Card className="flex flex-col justify-stretch items-center shadow-xl h-full">
          <CardHeader className="flex flex-col justify-center items-center mb-8">
            <CardTitle>Enterprise Package</CardTitle>
          </CardHeader>
          <div className="h-[28rem]">
            <CardContent className="flex gap-4">
              <Button variant="outline" size="icon"><Check /></Button><p>Tailored solutions for large corporations and enterprises.</p>
            </CardContent>
            <CardContent className="flex gap-4">
            <Button variant="outline" size="icon"><Check /></Button><p>Fully scalable and robust website architecture.</p>
            </CardContent>
            <CardContent className="flex gap-4">  
            <Button variant="outline" size="icon"><Check /></Button><p>Advanced security measures to protect your data.</p>
            </CardContent>
            <CardContent className="flex gap-4">  
            <Button variant="outline" size="icon"><Check /></Button><p>Dedicated account manager for personalized assistance.</p>
            </CardContent>
            <CardContent className="flex gap-4">  
            <Button variant="outline" size="icon"><Check /></Button><p>Continuous optimization and updates to stay ahead of the competition.</p>
            </CardContent>
          </div>
          <CardFooter className="flex flex-col justify-center items-center mt-8">
            <p className="font-bold text-3xl mb-4 text-center">$1999</p>
            <Button size="lg" className="bg-[#F44C41]">CHOOSE</Button>
          </CardFooter>
        </Card>
      </div>
      <Programming />
    </div>
  );
}
