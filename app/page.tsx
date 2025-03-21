"use client"; // This tells the compiler to use the client-side runtime

import React from 'react';
import 'leaflet/dist/leaflet.css';
import {Sidebar, SidebarItem} from './components/ui/sidebar.js';
import {Card, CardContent} from './components/ui/card.js';
import NewsCard from './components/newscard.js';
import Graph from './components/graph.js';
import Image from 'next/image.js';
import lulc2020 from './components/images/karura_2020_map.png'
import lulc2025 from './components/images/karura_2025_map.png'


export default function KaruraDashboard() {

  return (
    <div className="flex h-screen bg-green-900 text-white">
      <div className="w-1/5">
        <Sidebar className="bg-green-800">
            <SidebarItem onClick={() => <a href="#basemap"></a>}>Basemap</SidebarItem>
            <SidebarItem onClick={() => <a href="#lulc"></a>}>
              Land Cover
            </SidebarItem>
            <SidebarItem onClick={() => <a href="#hotspots"></a>}>
              Deforestation Hotspots
            </SidebarItem>
            <SidebarItem onClick={() => <a href="#change"></a>}>
              Forest cover change over time
            </SidebarItem>
        </Sidebar>
      </div>
      {/*Main Content*/}
      <div className='w-4/5 flex flex-col'>
        <h1>Deforestation Monitoring Dashboard - Karura Forest</h1>

        {/*Analytics*/}
        <div className='mt-4 grid grid-cols-1 md:grid-cols-3'>
          <Card className="md:col-span-1 rounded-md shadow-md">
            <CardContent>
              <h2>Deforestation Rate</h2>
              <p>0.5% per year</p>
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
              <h1 className='text-lg font-semibold'>Karura and environs land cover in 2020</h1>
              <Image src={lulc2020} alt='LULC 2020 in Karura and Environs' width={500} height={400} className="rounded-md"/>
            </CardContent>
          </Card>
          <Card className="md:col-span-1 rounded-md shadow-md">
            <CardContent>
              <h1 className='text-lg font-semibold'>Karura and environs land cover in 2025</h1>
              <Image src={lulc2025} alt='LULC 2025 in Karura and Environs' width={500} height={400} className="rounded-md"/>
            </CardContent>
          </Card>
        </div>
      </div>
      <footer>
      </footer>
    </div>
  );
}
