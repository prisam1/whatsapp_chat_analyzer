import React from 'react';
import { Upload } from 'lucide-react';

export const FileUpload = ({ onUpload, loading }) => (
  <div className="upload-section">
    <label className="dropzone">
      <Upload size={40} color="#3b82f6" />
      <h2 style={{ color: '#000' }}>{loading ? 'Analyzing...' : 'Upload Chat Export'}</h2>
      <p style={{ color: '#4b5563' }}>Click to select the WhatsApp .txt file</p>
      <input 
        type="file" 
        accept=".txt" 
        hidden 
        onChange={(e) => e.target.files[0] && onUpload(e.target.files[0])} 
      />
    </label>
  </div>
);