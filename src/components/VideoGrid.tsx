import React from 'react';
import { VideoCard } from './VideoCard';
import { Video } from '../types';

interface VideoGridProps {
  videos: Video[];
  onView: (url: string) => void;
  onShare: (url: string) => void;
}

export const VideoGrid: React.FC<VideoGridProps> = ({ videos, onView, onShare }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {videos.map((video) => (
        <VideoCard
          key={video.id}
          video={video}
          onView={onView}
          onShare={onShare}
        />
      ))}
    </div>
  );
};