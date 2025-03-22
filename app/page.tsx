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


export default function KaruraDashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isSidebarOpen, setisSidebarOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  const openModal = (image: string) => {
    setIsOpen(true);
    setSelectedImage(image);
  }

  return (
    <div className='flex h-full bg-green-900 text-white'>
    <div className={`fixed md:relative z-50  transition-all duration-300 bg-green-800 
      ${isSidebarOpen ? "translate-x-0 w-64" : "-translate-x-full w-0 md:translate-x-0 md:w-1/5"} overflow-hidden`}>
        <Sidebar className= "h-full">
          <SidebarItem>
          Contents:
          </ SidebarItem>
          <ul>
            <li>
              <SidebarItem>
                1. Location of Karura Forest
              </SidebarItem>
            </li>
            <li>
              <SidebarItem>
                2. Land cover in Karura and environs in 2020
              </SidebarItem>
            </li>
            <li>
              <SidebarItem>
                3. Land cover in Karura and environs in 2025
              </SidebarItem>
            </li>
            <li>
              <SidebarItem>
                4. Deforestation hotspots in Karura and environs
              </SidebarItem>
            </li>
            <li>
              <SidebarItem>
                5. Forest cover trend over the years
              </SidebarItem>
            </li>
            <li>
              <SidebarItem>
                6. Latest news on forests in Kenya
              </SidebarItem>
            </li>
            <li>
              <SidebarItem>
                7. Deforestation and afforestation rate since 2020
              </SidebarItem>
            </li>
          </ul>
          <SidebarItem>
            Attributions:
            <ul>
              <li>1. Copernicus</li>
              <li>2. World Imagery Basemap - ESRI</li>
              <li>3. Flaticon Marker Icon</li>
              <li>4. News API</li>
            </ul>
          </SidebarItem>
          <SidebarItem>
            Analysis and design by: <br/>
            Yegon Kipruto Elkana <br/>
            Geospatial Developer <br/>
            <span className="text-lg font-semibold mt-2">Karura Analysis Dashboard
              <span className="mt-2 text-sm">
              &copy; {currentYear} | Created by <span className="font-bold">Elkana</span>
              </span>
            </span>
          </SidebarItem>
          
        </Sidebar>
    </div>
      {/*Main Content*/}
      <div className='flex-1 flex flex-col'>
        {/*Analytics*/}
        <div className="p-4 bg-green-700 flex flex-row md:hidden justify-between">
          <button onClick={() => setisSidebarOpen(true)} className="md:hidden bg-green-700 hover:bg-green-600 active:scale-95 transition-all px-4 py-2 rounded-md shadow-md">
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
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          <Card className=" rounded-md shadow-md">
            <CardContent>
              <h1 className='font-semibold text-sm md:text-xl py-4 mx-2'>Karura and environs land cover in 2020</h1>
              <Image src={lulc2020 as unknown as string} alt='LULC 2020 in Karura and Environs' width={500} height={400} className="rounded-md" onClick = {() => openModal(lulc2020 as unknown as string)}/>
            </CardContent>
          </Card>
          <Card className="rounded-md shadow-md">
            <CardContent>
              <h1 className='font-semibold text-sm md:text-xl py-4 mx-2'>Karura and environs land cover in 2025</h1>
              <Image src={lulc2025 as unknown as string} alt='LULC 2025 in Karura and Environs' width={500} height={400} className="rounded-md" onClick={() => openModal(lulc2025 as unknown as string)}/>
            </CardContent>
          </Card>
          
          {/*Deforestation Hotspots*/}
          <Card className="md:col-span-1 rounded-md shadow-md">
            <CardContent>
              <h1 className='font-semibold text-sm md:text-xl py-4 mx-2'>Karura and environs deforestation hotspots</h1>
              <Image src={deforestation as unknown as string} alt='Deforestation hotspots in Karura and Environs' width={500} height={400} className="rounded-md" onClick={() => openModal(deforestation as unknown as string)}/>
            </CardContent>
          </Card>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          <Card className="md:col-span-1 rounded-md shadow-md">
            <CardContent>
              <h1 className='font-semibold text-sm md:text-xl py-4 mx-2'>Forest cover trend</h1>
              <Graph/>
            </CardContent>
          </Card>
          <Card className="md:col-span-1 rounded-md shadow-md">
            <NewsCard/>
          </Card>
    
          <Card className="md:col-span-1 rounded-md shadow-md">
            <CardContent>
              <h2 className='font-semibold text-sm md:text-xl py-4 mx-2'>Deforestation Rate</h2>
              <p>0.5% per year</p>
            </CardContent>
          </Card>
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
