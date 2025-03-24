"use client";

import { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Label, CartesianGrid, Legend } from 'recharts';


const Graph = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://karura-analysis-server.onrender.com/graph")
            .then(res => res.json())
            .then(data => setData(data))
            .catch(error => console.error("Error fetching graph data:", error));
    }, []);


    return (
        <div className='p-4 bg-white rounded-xl shadow-lg'>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart width={500} height={300} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year">
                    <Label value="Year" offset={-5} position="insideBottom"  style={{ fill: 'green', fontSize: '11px', fontWeight: 'semi-bold' }}/>
                    </XAxis>
                    <YAxis domain={['7', 'auto']}>
                    <Label value="Forest Cover (KM2)" angle={-90} position="insideLeft" style={{ fill: 'green', fontSize: '11px', fontWeight: 'semi-bold' }}/>
                    </YAxis>
                    <Tooltip />
                    <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }}/>
                    <Line type="monotone" dataKey="cover" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
};

export default Graph;