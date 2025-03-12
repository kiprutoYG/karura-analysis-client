"use client"; // This tells the compiler to use the client-side runtime

import React from 'react';
import { useState } from 'react';
import 'leaflet/dist/leaflet.css';
import {TileLayer } from 'react-leaflet';
import {Sidebar, SidebarItem} from './components/ui/sidebar.js';
import {Card, CardContent} from './components/ui/card.js';
import dynamic from "next/dynamic";

const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { 
  ssr: false 
});

export default function KaruraDashboard() {
  const [selectedLayer, setSelectedLayer] = useState('ndvi');

  return (
    <div className="flex h-screen bg-green-900 text-white">
      {/*Sidebar*/}  
      <Sidebar className="w-1/5 bg-green-800">
        <h2>Karura Forest Deforestation Analysis</h2>
        <SidebarItem onClick={() => setSelectedLayer('current')}>Current Bird View</SidebarItem>
        <SidebarItem onClick={() => setSelectedLayer('change_detection')}>Forest Cover Trend</SidebarItem>
        <SidebarItem onClick={() => setSelectedLayer('hotspots')}>Deforestation Hotspots</SidebarItem>
      </Sidebar>

      {/*Main Content*/}
      <div className='w-4/5 flex flex-col'>
        <h1>Deforestation Monitoring Dashboard - Karura Forest</h1>
        <div className="h-2/3 rounded-lg overflow-hidden shadow-lg border-2 border-green-700">
            <MapContainer center={[-1.2864, 36.8172]} zoom={12} className="h-[700px] w-full">
              <TileLayer
                url={`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?layer=${selectedLayer}`}
              />
            </MapContainer>
        </div>

        {/*Analytics*/}
        <div className='mt-4 grid grid-cols-3'>
          <Card className="col-span-1 rounded-md shadow-md">
            <CardContent>
              <h2>Deforestation Rate</h2>
              <p>0.5% per year</p>
            </CardContent>
          </Card>
          <Card className="col-span-1 rounded-md shadow-md">
            <CardContent>
              <h2>Forest Cover</h2>
              <p>80%</p>
            </CardContent>
          </Card>
        </div>
      </div>
      <footer>
      </footer>
    </div>
  );
}
