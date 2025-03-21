"use client"; // This tells the compiler to use the client-side runtime

import React from 'react';
import { useState } from 'react';
import { Dialog } from '@headlessui/react'; // Modal library
import 'leaflet/dist/leaflet.css';
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

  const openModal = (image: string) => {
    setIsOpen(true);
    setSelectedImage(image);
  }

  return (
    <div className="flex h-full bg-green-900 text-white">
      <div className="w-1/5">
        <Sidebar className= "h-full">
          <SidebarItem>
          Deforestation Monitoring Dashboard - Karura Forest
          </ SidebarItem>
        </Sidebar>
      </div>
      {/*Main Content*/}
      <div className='w-4/5 flex flex-col'>
        <h1>Location of Karura Forest</h1>
         <Map/>
      

        {/*Analytics*/}
        <div className='mt-4 grid grid-cols-1 md:grid-cols-3'>
          {/*Land Cover Maps*/}
          <Card className="md:col-span-1 rounded-md shadow-md">
            <CardContent>
              <h1 className='text-lg font-semibold'>Karura and environs land cover in 2020</h1>
              <Image src={lulc2020 as unknown as string} alt='LULC 2020 in Karura and Environs' width={500} height={400} className="rounded-md" onClick = {() => openModal(lulc2020 as unknown as string)}/>
            </CardContent>
          </Card>
          <Card className="md:col-span-1 rounded-md shadow-md">
            <CardContent>
              <h1 className='text-lg font-semibold'>Karura and environs land cover in 2025</h1>
              <Image src={lulc2025 as unknown as string} alt='LULC 2025 in Karura and Environs' width={500} height={400} className="rounded-md" onClick={() => openModal(lulc2025 as unknown as string)}/>
            </CardContent>
          </Card>

          
          {/*Deforestation Hotspots*/}
          <Card className="md:col-span-1 rounded-md shadow-md">
            <CardContent>
              <h1 className='text-lg font-semibold'>Karura and environs deforestation hotspots</h1>
              <Image src={deforestation as unknown as string} alt='Deforestation hotspots in Karura and Environs' width={500} height={400} className="rounded-md" onClick={() => openModal(deforestation as unknown as string)}/>
            </CardContent>
          </Card>
          <Card className="md:col-span-1 rounded-md shadow-md">
            <CardContent>
              <h1 className='text-lg font-semibold'>Forest cover trend</h1>
              <Graph/>
            </CardContent>
          </Card>
          <Card className="md:col-span-1 rounded-md shadow-md">
            <NewsCard/>
          </Card>
    
          <Card className="md:col-span-1 rounded-md shadow-md">
            <CardContent>
              <h2>Deforestation Rate</h2>
              <p>0.5% per year</p>
            </CardContent>
          </Card>
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
      <footer>
      </footer>
    </div>
  );
}
