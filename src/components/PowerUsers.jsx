import React from 'react';
import { Award, Zap } from 'lucide-react';

export const PowerUsers = ({ users = [] }) => {
  return (
    <div className="card">
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '10px', 
        borderBottom: '2px solid #f1f5f9', 
        paddingBottom: '15px', 
        marginBottom: '20px' 
      }}>
        <Award color="#eab308" size={24} />
        <h3 style={{ border: 'none', margin: 0, padding: 0, color: '#000' }}>
          Power Users
        </h3>
      </div>

      <p style={{ fontSize: '14px', color: '#4b5563', marginBottom: '20px' }}>
        Highly engaged members active for 4+ days in the last week.
      </p>

      <div style={{ 
        maxHeight: '400px', 
        overflowY: 'auto', 
        paddingRight: '5px' 
      }}>
        {users.length > 0 ? (
          users.map((user, i) => (
            <div key={i} className="power-user-item">
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div className="status-dot"></div>
                <span style={{ color: '#000', fontWeight: '500' }}>{user}</span>
              </div>
              <Zap size={14} color="#8b5cf6" fill="#8b5cf6" />
            </div>
          ))
        ) : (
          <div style={{ 
            textAlign: 'center', 
            padding: '40px 0', 
            color: '#9ca3af',
            border: '1px dashed #e5e7eb',
            borderRadius: '12px'
          }}>
            <p>No power users identified yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};