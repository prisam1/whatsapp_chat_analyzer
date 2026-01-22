import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export const ActivityChart = ({ chartData }) => (
  <div className="card">
    <h3 style={{ color: '#000', marginBottom: '20px' }}>Last 7 Days Activity Overview</h3>
    <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
          <XAxis dataKey="date" tick={{fill: '#000'}} />
          <YAxis tick={{fill: '#000'}} />
          <Tooltip contentStyle={{ borderRadius: '10px' }} />
          <Legend />
          <Bar dataKey="activeUsers" fill="#3b82f6" name="Active Users" radius={[4, 4, 0, 0]} />
          <Bar dataKey="newJoins" fill="#f97316" name="New Joins" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
);