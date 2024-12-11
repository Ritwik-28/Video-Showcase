import React, { useEffect, useRef } from 'react';

interface VideoModalProps {
  url: string;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ url, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close the modal if the user clicks outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  if (!url) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div
        ref={modalRef}
        className="relative bg-white p-4 rounded-lg max-w-3xl w-full mx-4"
      >
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