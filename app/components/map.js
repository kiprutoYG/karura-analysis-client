"use client";

import React from "react";
import { useState } from "react";
import dynamic from "next/dynamic";
import { useEffect } from "react";

const MapContainer = dynamic(() => import('react-leaflet').then((module) => module.MapContainer), {ssr: false});
const TileLayer = dynamic(() => import('react-leaflet').then((module) => module.TileLayer), {ssr: false});


export default function Map() {
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true)
    }, []);

    if (!isClient){
        return <p>Loading map...</p>
    }
        return (
            <div>
            <MapContainer center={[-1.234, 36.828]} zoom={16} style={{height:'400px', width: "100%" }}>
                <TileLayer url="https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"/>
            </MapContainer>
            </div>

        )
    
}