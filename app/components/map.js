"use client";

import React from "react";
import { useState } from "react";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import 'leaflet/dist/leaflet.css';

const MapContainer = dynamic(() => import('react-leaflet').then((module) => module.MapContainer), {ssr: false});
const TileLayer = dynamic(() => import('react-leaflet').then((module) => module.TileLayer), {ssr: false});
const Marker = dynamic(() => import('react-leaflet').then((module) => module.Marker), {ssr: false});
const Popup = dynamic(() => import('react-leaflet').then((module) => module.Popup), {ssr: false});


const karuraForest = [-1.234, 36.828]; // Karura Forest Coordinates


export default function Map() {
    const [isClient, setIsClient] = useState(false);
    const [customIcon, setCustomIcon] = useState(null)
    useEffect(() => {
        async function loadLeaflet() {
          const L = await import("leaflet");
    
          setCustomIcon(
            new L.Icon({
              iconUrl: "/push-pin.png", // Use public folder assets
              iconSize: [40, 41],
              iconAnchor: [12, 41],
              popupAnchor: [1, -34],
            })
          );
        }
    
        loadLeaflet();
      }, []);

    useEffect(() => {
        setIsClient(true)
    }, []);

    if (!isClient){
        return <p>Loading map...</p>
    }
        return (
            <div>
            <MapContainer center={karuraForest} zoom={14} style={{height:'400px', width: "100%" }}>
                <TileLayer url="https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"/>

                {/* Karura Forest Marker */}
                {customIcon && (
                    <Marker position={karuraForest} icon={customIcon}>
                    <Popup>
                        <span className="font-bold">Karura Forest</span> <br />
                        One of Nairobi's largest urban forests.
                    </Popup>
                    </Marker>
                )}
            </MapContainer>
            </div>

        )
    
}