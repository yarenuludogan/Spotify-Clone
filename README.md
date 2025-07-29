# Spotify Clone

A full-stack Spotify clone built with node.js technologies, featuring music playback, user authentication and admin dashboard.

##  Features

### User Features
- **Music Playback**: Full audio player with play/pause, next/previous, volume control
- **Playlist Management**: Create and manage playlists
- **User Authentication**: Secure login with Clerk
- **Responsive Design**: Works on desktop and mobile devices


### Admin Features
- **Dashboard**: Overview of songs, albums, and user statistics
- **Content Management**: Add, edit, and delete songs and albums
- **Analytics**: View platform statistics

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI framework
- **TypeScript** 
- **Vite** - Build tool and dev server
- **Tailwind CSS** 
- **Zustand** - State management
- **React Router**
- **Axios** 
- **Clerk** - Authentication

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **Socket.io** - Real-time communication
- **Cloudinary** - File storage
- **Clerk** - Authentication middleware
- **CORS** - Cross-origin resource sharing

## 📁 Project Structure

```
Spotify Clone/
├── Frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/     
│   │   ├── pages/           # Page components
│   │   ├── stores/          # Zustand state stores
│   │   ├── types/           # TypeScript type definitions
│   │   ├── lib/             # Utility functions
│   │   └── providers/       # Context providers
│   ├── public/              # Static assets
│   └── package.json
├── Backend/                 # Node.js backend application
│   ├── src/
│   │   ├── controller/      # Route controllers
│   │   ├── models/          # Mongoose models
│   │   ├── routes/          # API routes
│   │   ├── middleware/      # Custom middleware
│   │   ├── lib/             # Utility functions
│   │   └── seeds/           # Database seed files
│   └── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB Atlas account
- Clerk account for authentication
- Cloudinary account for file storage

## 🎯 Key Features Implementation

### Authentication System
- **Clerk Integration**: Secure user authentication with social login options
- **Protected Routes**: Admin-only access to dashboard
- **User Sessions**: Persistent login state

### File Management
- **Cloudinary Integration**: Secure file upload and storage
- **Image Processing**: Automatic image optimization
- **Audio File Handling**: MP3 file upload and streaming

### State Management
- **Zustand Stores**: 
  - `useMusicStore`: Music data and playback state
  - `usePlayerStore`: Audio player controls
  - `useAuthStore`: Authentication state
  - `useChatStore`: Chat functionality

