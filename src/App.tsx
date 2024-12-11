import React, { useState } from 'react';
import { VideoModal } from './components/VideoModal';
import { UserForm } from './components/UserForm';
import { TabList } from './components/TabList';
import { VideoGrid } from './components/VideoGrid';
import { tabsData } from './data/masterData';
import { createShareMessage, createWhatsAppUrl } from './utils/share';

function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [modalUrl, setModalUrl] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [error, setError] = useState(false);

  const handleShare = (url: string) => {
    if (!name || !number || number.length !== 10) {
      setError(true);
      return;
    }
    setError(false);
    
    const message = createShareMessage(name, url);
    const whatsappUrl = createWhatsAppUrl(number, message);
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#004246] py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* User Form with reduced margin */}
        <UserForm
          name={name}
          number={number}
          onNameChange={setName}
          onNumberChange={setNumber}
          error={error}
        />

        <div className="bg-[#004246] rounded-lg p-6">
          {/* TabList without top margin */}
          <TabList
            tabs={tabsData}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
          
          {/* Reduced margin-top between TabList and VideoGrid */}
          <div className="mt-4">
            <VideoGrid
              videos={tabsData[activeTab].videos}
              onView={(url) => setModalUrl(url)}
              onShare={handleShare}
            />
          </div>
        </div>
      </div>

      {/* Video modal */}
      {modalUrl && (
        <VideoModal
          url={modalUrl}
          onClose={() => setModalUrl('')}
        />
      )}
    </div>
  );
}

export default App;