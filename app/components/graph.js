"use client";

import { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';


const Graph = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/graph")
            .then(res => res.json())
            .then(data => setData(data))
            .catch(error => console.error("Error fetching graph data:", error));
    }, []);


    return (
        <div className='p-4 bg-white rounded-xl shadow-lg'>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                    <XAxis dataKey="year" />
                    <YAxis/>
                    <Tooltip/>
                    <Line type="monotone" dataKey="cover" stroke="#2E8B57" strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
};

export default Graph;