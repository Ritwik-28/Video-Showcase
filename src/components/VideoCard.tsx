import React from 'react';
import { Video } from '../types';

interface VideoCardProps {
  video: Video;
  onView: (url: string) => void;
  onShare: (url: string) => void;
}

export const VideoCard: React.FC<VideoCardProps> = ({ video, onView, onShare }) => {
  return (
    <div className="relative bg-white p-6 rounded-lg shadow-md">
      <span className={`absolute top-2 right-2 px-2 py-1 text-xs font-semibold rounded text-white ${
        video.level === 'beginner' ? 'bg-green-500' : 'bg-orange-500'
      }`}>
        {video.level.charAt(0).toUpperCase() + video.level.slice(1)}
      </span>
      
      <h4 className="text-lg font-semibold mb-2">{video.title}</h4>
      <p className="text-gray-600 mb-4">{video.description}</p>
      
      <div className="flex items-center space-x-2">
        <button
          onClick={() => onView(video.url)}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          View
        </button>
        <button
          onClick={() => onShare(video.url)}
          className="p-2 hover:scale-110 transition-transform"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            className="w-6 h-6"
          />
        </button>
      </div>
    </div>
  );
};