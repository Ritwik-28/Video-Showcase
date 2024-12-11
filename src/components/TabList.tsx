import React, { useRef, useEffect, useState } from 'react';
import { TabData } from '../types';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TabListProps {
  tabs: TabData[];
  activeTab: number;
  onTabChange: (index: number) => void;
}

export const TabList: React.FC<TabListProps> = ({ tabs, activeTab, onTabChange }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative flex items-center max-w-full px-4 pb-4 border-b border-[#2df8c5]/20">
      {showLeftArrow && (
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 z-10 p-2 text-[#2df8c5] hover:text-white transition-colors"
          aria-label="Scroll left"
        >
          <ChevronLeft size={24} />
        </button>
      )}
      
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto space-x-6 scrollbar-hide mx-8"
        onScroll={checkScroll}
      >
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(index)}
            className={`px-4 py-2 text-lg transition-colors whitespace-nowrap flex-shrink-0 ${
              activeTab === index
                ? 'text-white border-b-2 border-[#2df8c5]'
                : 'text-[#2df8c5] hover:text-white'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {showRightArrow && (
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 z-10 p-2 text-[#2df8c5] hover:text-white transition-colors"
          aria-label="Scroll right"
        >
          <ChevronRight size={24} />
        </button>
      )}
    </div>
  );
}