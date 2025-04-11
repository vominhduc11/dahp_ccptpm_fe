// Mock chat messages
const chatMessages = [
    {
        id: 1,
        userId: 1,
        userName: 'Admin',
        message: 'Welcome to the watch room! Movie will start soon.',
        timestamp: new Date(Date.now() - 1200000).toISOString()
    },
    {
        id: 2,
        userId: 3,
        userName: 'CinemaFan',
        message: 'Excited to watch this movie!',
        timestamp: new Date(Date.now() - 900000).toISOString()
    },
    {
        id: 3,
        userId: 2,
        userName: 'User1',
        message: 'Has anyone seen this before?',
        timestamp: new Date(Date.now() - 600000).toISOString()
    },
    {
        id: 4,
        userId: 5,
        userName: 'FilmBuff',
        message: "Yes, it's really good!",
        timestamp: new Date(Date.now() - 300000).toISOString()
    },
    {
        id: 5,
        userId: 1,
        userName: 'Admin',
        message: 'Starting the movie in 1 minute, get ready!',
        timestamp: new Date(Date.now() - 60000).toISOString()
    },
    { id: 6, userId: 0, userName: 'System', message: 'You joined the room', timestamp: new Date().toISOString() }
];

export default chatMessages;
