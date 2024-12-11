import React from 'react';

interface VideoModalProps {
  url: string;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ url, onClose }) => {
  if (!url) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="relative bg-white p-4 rounded-lg max-w-4xl w-full mx-4">
        <button
          onClick={onClose}
          className="absolute -top-2 right-2 text-3xl text-gray-600 hover:text-gray-800"
        >
          &times;
        </button>
        <div className="aspect-video">
          <iframe
            src={url}
            className="w-full h-full"
            allowFullScreen
            title="Video content"
          />
        </div>
      </div>
    </div>
  );
};