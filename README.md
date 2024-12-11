# Video Learning Portal

A modern, responsive React application for organizing and sharing educational video content across different programming domains.

## 🚀 Features

- **📱 Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices
- **🎯 Domain-specific Content**: Organized content across multiple programming domains:
  - DSA (Data Structures & Algorithms)
  - Full Stack Development
  - Backend Development
  - QA Automation
  - System Design
  - Foundation
  - Data Analytics & AI
- **🎨 Modern UI/UX**: Clean interface with smooth transitions and modern scrollbars
- **📲 WhatsApp Integration**: Easy content sharing via WhatsApp
- **🎥 Video Modal**: Distraction-free video viewing experience
- **📊 Difficulty Levels**: Content categorized into Beginner and Intermediate levels

## 🛠️ Tech Stack

- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **State Management**: React Hooks
- **Video Platform**: YouTube Embed

## 🏃‍♂️ Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd video-learning-portal
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── TabList.tsx      # Navigation tabs
│   ├── VideoCard.tsx    # Individual video card
│   ├── VideoGrid.tsx    # Grid of video cards
│   ├── VideoModal.tsx   # Video player modal
│   └── UserForm.tsx     # User input form
├── data/
│   └── masterData.ts    # Content data
├── types/
│   └── index.ts         # TypeScript interfaces
├── utils/
│   └── share.ts         # Sharing utilities
└── App.tsx              # Main application component

```

## 🎨 Customization

### Adding New Content

1. Open `src/data/masterData.ts`
2. Add new video entries following the existing structure:
   ```typescript
   {
     id: 'unique-id',
     title: 'Video Title',
     description: 'Video Description',
     level: 'beginner' | 'intermediate',
     url: 'video-url',
     category: 'Category Name'
   }
   ```

### Styling

- Modify `src/index.css` for global styles
- Update Tailwind classes in components for specific styling
- Customize scrollbar appearance in `src/index.css`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📝 Code Style

- Use TypeScript for type safety
- Follow React functional component patterns
- Maintain component modularity
- Use meaningful variable and function names
- Add JSDoc comments for complex functions

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Icons from [Lucide React](https://lucide.dev)
- Styling inspiration from modern web applications
- Video content from various educational sources
