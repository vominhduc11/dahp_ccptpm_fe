// Mock chat messages
const chatMessages = [
    {
        id: 1,
        userId: 0,
        userName: 'System',
        message: 'Watch room created for "The Last Voyage"',
        timestamp: '2025-04-11T09:30:00Z'
    },
    { id: 2, userId: 1, userName: 'John Doe', message: 'Hello everyone!', timestamp: '2025-04-11T09:32:10Z' },
    {
        id: 3,
        userId: 2,
        userName: 'Jane Smith',
        message: 'Hi! Excited to watch this movie together',
        timestamp: '2025-04-11T09:33:15Z'
    },
    {
        id: 4,
        userId: 3,
        userName: 'David Wilson',
        message: "I've heard this is great!",
        timestamp: '2025-04-11T09:35:30Z'
    },
    { id: 5, userId: 0, userName: 'System', message: 'Admin has started the movie', timestamp: '2025-04-11T09:40:00Z' },
    {
        id: 6,
        userId: 4,
        userName: 'Sarah Johnson',
        message: 'The cinematography is amazing!',
        timestamp: '2025-04-11T09:45:22Z'
    },
    {
        id: 7,
        userId: 6,
        userName: 'Emily Davis',
        message: 'This opening scene is intense',
        timestamp: '2025-04-11T09:47:18Z'
    },
    { id: 8, userId: 0, userName: 'System', message: 'Admin has paused the movie', timestamp: '2025-04-11T09:50:00Z' },
    {
        id: 9,
        userId: 999,
        userName: 'Admin',
        message: "Taking a short break, we'll continue in a moment!",
        timestamp: '2025-04-11T09:50:15Z'
    },
    {
        id: 10,
        userId: 7,
        userName: 'Robert Miller',
        message: 'Perfect timing, I needed to grab some snacks',
        timestamp: '2025-04-11T09:51:05Z'
    },
    { id: 11, userId: 0, userName: 'System', message: 'Admin has resumed the movie', timestamp: '2025-04-11T09:55:00Z' }
];

export default chatMessages;
