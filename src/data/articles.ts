// src/data/articles.ts

export type GalleryImage = {
  src: string;       // e.g. "/articles/realtime-chat-app/1.png"
  title?: string;
  alt?: string;
  caption?: string;
};

export type Article = {
  slug: string;
  title: string;
  createdAt: string;        // ISO string
  description: string;
  content: string;          // markdown-ish text like your current one
  featuredImage?: string;   // "/articles/<slug>/featured.jpg"
  gallery?: GalleryImage[];
};

export const ARTICLES: Article[] = [
  {
  slug: "realtime-chat-app",
  title: "Building a Real-time Chat Application",
  createdAt: new Date().toISOString(), // or set a real date like "2025-11-10T00:00:00.000Z"
  description:
    "Discover how I built a scalable real-time chat application using WebSockets and React.",
  featuredImage: "/articles/realtime-chat-app/ggc2.jpeg",
  content: `
# Building a Real-time Chat Application

## Introduction
This project showcases a modern real-time communication platform built with cutting-edge web technologies.

## Key Features
- Real-time messaging with WebSockets
- User authentication and authorization
- Message history and persistence
- Responsive design for all devices

## Technologies Used
- React with TypeScript
- Node.js and Express
- WebSocket API
- PostgreSQL database

## Challenges & Solutions
One of the main challenges was handling concurrent connections efficiently. I implemented connection pooling and message batching to optimize performance under load.

## Results
The application successfully handles 1000+ concurrent users with sub-100ms message latency.
`.trim(),
  gallery: [
    {
      src: "/articles/realtime-chat-app/ggc2.jpeg",
      title: "Chat Interface",
      alt: "Chat interface screenshot",
    },
    {
      src: "/articles/realtime-chat-app/user-dashboard.jpg",
      title: "User Dashboard",
      alt: "User dashboard screenshot",
    },
    {
      src: "/articles/realtime-chat-app/mobile-view.jpg",
      title: "Mobile View",
      alt: "Mobile view screenshot",
    },
  ],
},
];
