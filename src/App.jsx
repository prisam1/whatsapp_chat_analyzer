import React from 'react';
import { useChatAnalyzer } from './hooks/useChatAnalyzer';
import { FileUpload } from './components/FileUpload';
import { ActivityChart } from './components/ActivityChart';
import { PowerUsers } from './components/PowerUsers';
import { MessageSquare, BarChart3, AlertCircle } from 'lucide-react';
import './App.css';

function App() {
  const { data, loading, error, processFile } = useChatAnalyzer();

  return (
    <div className="container">
      {/* Header Section */}
      <header className="header">
        <div className="brand">
          <MessageSquare size={32} color="#3b82f6" />
          <h1>WhatsApp Analytics <span>Pro</span></h1>
        </div>
        <p>Upload your chat export to visualize group engagement and user retention.</p>
      </header>
 
      {/* Error Alert Box */}
      {error && (
        <div className="error-msg">
          <AlertCircle size={20} />
          <span>{error}</span>
        </div>
      )}

      {/* File Ingestion Section */}
      <FileUpload onUpload={processFile} loading={loading} />

      {/* Main Dashboard - Only visible after data is fetched */}
      {data && (
        <main className="dashboard-grid">
          <section className="chart-section">
            {/* <div className="section-header">
              <BarChart3 size={20} />
              <h2>Last 7 Days Activity</h2>
            </div> */}
            <ActivityChart chartData={data.chartData} />
          </section>

          <aside className="sidebar-section">
            <PowerUsers users={data.powerUsers} />
          </aside>
        </main>
      )}

      {/* / Empty State placeholder */}
      {!data && !loading && !error && (
        <div className="empty-state">
          <p>No data to display. Please upload a <strong>_chat.txt</strong> file exported from WhatsApp.</p>
        </div>
      )}
    </div>
  );
}

export default App;