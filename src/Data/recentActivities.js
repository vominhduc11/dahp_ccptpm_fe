// Mock recent activities
const recentActivities = [
    { id: 1, type: 'room_created', user: 'Admin', movie: 'The Last Voyage', time: '10 minutes ago' },
    { id: 2, type: 'user_banned', user: 'Admin', targetUser: 'spammer123', time: '25 minutes ago' },
    { id: 3, type: 'movie_added', user: 'Content Manager', movie: 'Virtual Horizon', time: '1 hour ago' },
    { id: 4, type: 'room_closed', user: 'Admin', movie: 'City of Shadows', time: '2 hours ago' },
    { id: 5, type: 'user_created', user: 'System', targetUser: 'newuser456', time: '3 hours ago' },
    { id: 6, type: 'movie_updated', user: 'Content Manager', movie: "Ocean's Secret", time: '5 hours ago' }
];

export default recentActivities;
