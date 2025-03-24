"use client"; // This tells the compiler to use the client-side runtime

import React from 'react';
import { useState } from 'react';
import { Dialog } from '@headlessui/react'; // Modal library
import 'leaflet/dist/leaflet.css';
import { Menu , X } from 'lucide-react';
import {Sidebar, SidebarItem } from './components/ui/sidebar.js';
import {Card, CardContent} from './components/ui/card.js';
import NewsCard from './components/newscard.js';
import Graph from './components/graph.js';
import Image from 'next/image.js';
import lulc2020 from './components/images/karura_2020_map.png'
import lulc2025 from './components/images/karura_2025_map.png'
import deforestation from './components/images/deforestation_hotspots.png'
import  Map from './components/map.js';
import {motion} from "framer-motion";


export default function KaruraDashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isSidebarOpen, setisSidebarOpen] = useState(false);
  const currentYear = new Date().getFullYear();
  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const openModal = (image: string) => {
    setIsOpen(true);
    setSelectedImage(image);
  }

  return (
    <div className='flex h-full bg-green-900 text-white overflow-y-auto'>
    <div className={`fixed md:relative z-50  transition-all duration-300 bg-green-800 
      ${isSidebarOpen ? "translate-x-0 w-76" : "-translate-x-full  w-0 md:translate-x-0 md:w-1/5"} overflow-hidden`}>
        <Sidebar className= "h-full text-sm">
          
          <SidebarItem>
            <hr className='opacity-30 py-4' />
          <span className='font-semibold mx-2'>Dashboard Contents:</span>
          </SidebarItem>
          <hr className='opacity-30 pb-4'/>
          <ul>
            <li className='text-sm'>
              <SidebarItem>
                Location of Karura Forest
              </SidebarItem>
            </li>
            <li className='text-sm'>
              <SidebarItem>
                Land cover in Karura and environs in 2020
              </SidebarItem>
            </li>
            <li className='text-sm'>
              <SidebarItem>
                Land cover in Karura and environs in 2025
              </SidebarItem>
            </li>
            <li className='text-sm'>
              <SidebarItem>
                Deforestation hotspots in Karura and environs
              </SidebarItem>
            </li>
            <li className='text-sm'>
              <SidebarItem>
                Forest cover trend over the years
              </SidebarItem>
            </li>
            <li className='text-sm'>
              <SidebarItem>
                Latest news on forests in Kenya
              </SidebarItem>
            </li>
            <li className='text-sm'>
              <SidebarItem>
                Deforestation and afforestation rate since 2020
              </SidebarItem>
            </li>
          </ul>
          <hr className='opacity-30 py-4'/>
          <SidebarItem>
            <span className='font-semibold mx-2 py-4 md:py-6'>Attributions:</span>
            <hr className='opacity-30 py-4' />
            <ul>
              <li className='text-sm'><SidebarItem>1. Copernicus</SidebarItem></li>
              <li className='text-sm'><SidebarItem>2. Leaflet</SidebarItem></li>
              <li className='text-sm'><SidebarItem>3. World Imagery Basemap - ESRI</SidebarItem></li>
              <li className='text-sm'><SidebarItem>4. Flaticon Marker Icon</SidebarItem></li>
              <li className='text-sm'><SidebarItem>5. News API</SidebarItem></li>
            </ul>
          </SidebarItem>
          <SidebarItem>
            <hr className='opacity-30 py-4' />
            <span className='font-semibold mx-2 py-4 md:py-6 text-sm'>Note:</span><br />
            <hr className='opacity-30 py-4'/>
            <span className="mt-1 text-xs md:text-sm opacity-75">The analysis results are subject to factors such as satellite resolution, data availability, and processing techniques.
               Variations in classification accuracy and temporal changes may also influence the measurements. 
              For precise validation, ground-truth data and higher-resolution imagery are recommended.</span>
          </SidebarItem>

          
        </Sidebar>
    </div>
      {/*Main Content*/}
      <div className='flex-1 flex flex-col'>
        {/*Analytics*/}
        <div className="p-4 bg-green-700 flex flex-row md:hidden justify-between">
          <button onClick={() => setisSidebarOpen(true)} className="md:hidden bg-green-700 hover:bg-green-600 active:scale-95 transition-all px-4 py-2 rounded-md shadow-md h-full">
            <Menu size={28} />
          </button>
          <h1 className='font-bold text-xl text-center p-4 md:hidden'>Karura Forest Analysis Dashboard </h1>
          <button onClick={() => setisSidebarOpen(false)} className="md:hidden bg-green-700 hover:bg-green-600 active:scale-95 transition-all px-4 py-2 rounded-md shadow-md">
            <X size = {28}/>
          </button>   
        </div>
        <h1 className='hidden md:block font-bold text-2xl text-center p-4'>Karura Forest Analysis Dashboard </h1>
        <h1 className='font-semibold text-lg py-4 mx-2'>Location of Karura Forest</h1>
        <Map/>
          {/*Land Cover Maps*/}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            className='grid grid-cols-1 md:grid-cols-3 gap-4'
            >
            <Card className=" rounded-md shadow-md">
              <CardContent>
                <h1 className='font-semibold text-lg md:text-xl py-4 mx-2'>Karura and Environs Land Cover in 2020</h1>
                <Image src={lulc2020 as unknown as string} alt='LULC 2020 in Karura and Environs' width={500} height={400} className="rounded-md" onClick = {() => openModal(lulc2020 as unknown as string)}/>
              </CardContent>
            </Card>
            <Card className="rounded-md shadow-md">
              <CardContent>
                <h1 className='font-semibold text-lg md:text-xl py-4 mx-2'>Karura and Environs Land Cover in 2025</h1>
                <Image src={lulc2025 as unknown as string} alt='LULC 2025 in Karura and Environs' width={500} height={400} className="rounded-md" onClick={() => openModal(lulc2025 as unknown as string)}/>
              </CardContent>
            </Card>
            
            {/*Deforestation Hotspots*/}
            <Card className="md:col-span-1 rounded-md shadow-md">
              <CardContent>
                <h1 className='font-semibold text-lg md:text-xl py-4 mx-2'>Karura and Environs Deforestation Hotspots</h1>
                <Image src={deforestation as unknown as string} alt='Deforestation hotspots in Karura and Environs' width={500} height={400} className="rounded-md" onClick={() => openModal(deforestation as unknown as string)}/>
              </CardContent>
            </Card>
            </motion.div>

            <motion.div
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            className='grid grid-cols-1 md:grid-cols-3 gap-4'
            >
              <Card className="md:col-span-1 rounded-md shadow-md">
                <CardContent>
                  <h1 className='font-semibold text-lg md:text-xl py-4 mx-2'>Forest Cover Trend</h1>
                  <Graph/>
                </CardContent>
              </Card>
              <Card className="md:col-span-1 rounded-md shadow-md">
                <CardContent>
                  <h2 className='font-semibold text-lg md:text-xl py-4 mx-2'>Deforestation and Afforestation Statistics since 2020</h2>
                  <p className='text-sm md:text-lg py-4 mx-2'><span className='font-semibold'>Deforested area:</span> 0.446 km²</p>
                  <p className='text-sm md:text-lg py-4 mx-2'><span className='font-semibold'>Afforested area:</span> 0.337 km²</p>
                  <p className='text-sm md:text-lg py-4 mx-2'><span className='font-semibold'>Deforestation rate:</span> 4.44%</p>
                  <p className='text-sm md:text-lg py-4 mx-2'><span className='font-semibold'>Afforestation rate:</span> 3.35%</p>

                  <p className='font-semibold text-sm md:text-lg'>Summary:</p>
                  <p className='text-sm md:text-lg'>Since 2020, Karura Forest has experienced both deforestation and afforestation efforts. 
                    While 0.446 km² of forest has been lost at a 4.44% deforestation rate, restoration initiatives have recovered 0.337 km², 
                    achieving a 3.35% afforestation rate. Although afforestation is ongoing, 
                    the gap highlights the need for stronger conservation strategies to balance forest loss and recovery.</p>
                </CardContent>
              </Card>
              <Card className="md:col-span-1 rounded-md shadow-md">
                <NewsCard/>
              </Card>
        
            </motion.div>
          <div className="max-w-5xl mx-auto px-6 text-center py-4 md:py-8">
            <p className="text-lg font-semibold">Karura Forest Analysis</p>
            <p className="mt-2 text-sm">
              &copy; {currentYear} | Analysis and Dashboard done by <span className="font-bold">Yegon Kipruto Elkana</span>
            </p>
            <p className="mt-1 text-xs opacity-75">Data sourced from Sentinel-2, Icon from FlatIcon, Basemap from ESRI, News from NewsAPI</p>
          </div>
        </div>

        {/* Image Modal */}
        <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
          <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white p-4 rounded-lg max-w-3xl w-full z-50">
              <button onClick={() => setIsOpen(false)} className="relative top-2 right-2 text-gray-700 size-4">
                ✖
              </button>
              {selectedImage && (
                <Image src={selectedImage} alt="Expanded View" width={800} height={600} className="rounded-lg" />
              )}
            </div>
          </div>
        </Dialog>
    </div>
    
  
  );
}
