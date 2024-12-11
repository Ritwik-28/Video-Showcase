import { TabData } from '../types';

export const tabsData: TabData[] = [
  {
    id: 'dsa',
    label: 'DSA',
    videos: [
      {
        id: 'dsa-beginner',
        title: 'Recursion in DSA',
        description: 'Get introduced to the concept of Recursion in DSA and solve problems using recursion.',
        level: 'beginner',
        url: 'https://www.youtube.com/embed/YeMznlzDlJw',
        category: 'DSA'
      },
      {
        id: 'dsa-intermediate',
        title: 'Stack, Queue and Hash',
        description: 'Learn how to solve Stack, Queue and Hash related DSA problems.',
        level: 'intermediate',
        url: 'https://www.youtube.com/embed/ot2XHkyD1t4',
        category: 'DSA'
      }
    ]
  },
  // Add other categories following the same pattern...
];