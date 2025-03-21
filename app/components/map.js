"use client";

import React from "react";
import { useState } from "react";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { LayerGroup, TileLayer } from "react-leaflet";

const MapContainer = dynamic(() => import('react-leaflet').then((module) => module.MapContainer), {ssr: false});


export default function Map({ selectedLayer }) {
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true)
    }, []);

    if (!isClient){
        return <p>Loading map...</p>
    }
        return (
            <MapContainer center={[-1.234, 36.812]} zoom={13} style={{ height: "400px", width: "100%" }}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                {/* Conditional Overlays */}
                {selectedLayer === "hotspot" && (
                    <LayerGroup>
                    {/* Replace with actual TileLayer or GeoJSON */}
                    <TileLayer url="https://yourserver.com/hotspots/{z}/{x}/{y}.png" />
                    </LayerGroup>
                )}

                {selectedLayer === "trend" && (
                    <LayerGroup>
                    {/* Replace with actual TileLayer or GeoJSON */}
                    <TileLayer url="https://yourserver.com/trend/{z}/{x}/{y}.png" />
                    </LayerGroup>
                )}
            </MapContainer>
        )
    
}