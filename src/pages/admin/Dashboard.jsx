import { Link } from 'react-router-dom';

const Dashboard = () => {
    // Static mock data
    const mockStats = {
        totalUsers: 1254,
        activeUsers: 98,
        totalMovies: 427,
        newUsersToday: 15,
        activeRooms: 3,
        totalWatched: 8753,
        revenue: '$5,280'
    };

    // Mock recent activities
    const recentActivities = [
        { id: 1, type: 'room_created', user: 'Admin', movie: 'The Last Voyage', time: '10 minutes ago' },
        { id: 2, type: 'user_banned', user: 'Admin', targetUser: 'spammer123', time: '25 minutes ago' },
        { id: 3, type: 'movie_added', user: 'Content Manager', movie: 'Virtual Horizon', time: '1 hour ago' },
        { id: 4, type: 'room_closed', user: 'Admin', movie: 'City of Shadows', time: '2 hours ago' },
        { id: 5, type: 'user_created', user: 'System', targetUser: 'newuser456', time: '3 hours ago' },
        { id: 6, type: 'movie_updated', user: 'Content Manager', movie: "Ocean's Secret", time: '5 hours ago' }
    ];

    // Mock active rooms data
    const activeRooms = [
        {
            id: 101,
            movieId: 1,
            movieTitle: 'The Last Voyage',
            posterPath: 'https://via.placeholder.com/40x40?text=Movie1',
            activeViewers: 24,
            startedAt: '2023-05-01T14:30:00Z'
        },
        {
            id: 102,
            movieId: 2,
            movieTitle: 'Virtual Horizon',
            posterPath: 'https://via.placeholder.com/40x40?text=Movie2',
            activeViewers: 18,
            startedAt: '2023-05-01T15:15:00Z'
        },
        {
            id: 103,
            movieId: 3,
            movieTitle: "Ocean's Secret",
            posterPath: 'https://via.placeholder.com/40x40?text=Movie3',
            activeViewers: 31,
            startedAt: '2023-05-01T16:00:00Z'
        }
    ];

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Dashboard content */}
            <main className="overflow-y-auto bg-gray-100 p-4 md:p-6 pb-16">
                {/* Greeting */}
                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">Welcome back, Admin</h2>
                    <p className="text-gray-600">Here's what's happening with your streaming platform today.</p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    {/* Total Users */}
                    <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 flex items-center transform transition-transform duration-300 hover:scale-102 hover:shadow-md">
                        <div className="rounded-full p-3 bg-blue-100 text-blue-600 mr-4">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 font-medium">Total Users</p>
                            <p className="text-2xl font-bold text-gray-800">{mockStats.totalUsers}</p>
                            <p className="text-xs text-green-600">+{mockStats.newUsersToday} today</p>
                        </div>
                    </div>

                    {/* Active Users */}
                    <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 flex items-center transform transition-transform duration-300 hover:scale-102 hover:shadow-md">
                        <div className="rounded-full p-3 bg-green-100 text-green-600 mr-4">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 font-medium">Active Users</p>
                            <p className="text-2xl font-bold text-gray-800">{mockStats.activeUsers}</p>
                            <p className="text-xs text-gray-500">Online now</p>
                        </div>
                    </div>

                    {/* Total Movies */}
                    <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 flex items-center transform transition-transform duration-300 hover:scale-102 hover:shadow-md">
                        <div className="rounded-full p-3 bg-purple-100 text-purple-600 mr-4">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    fillRule="evenodd"
                                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6v4H7V5zm8 8v2h-2v-2h2zm-2-2h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-4h2v-2h-2v2zm-4 0h2v-2H7v2zm0 4h2v-2H7v2z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 font-medium">Total Movies</p>
                            <p className="text-2xl font-bold text-gray-800">{mockStats.totalMovies}</p>
                            <p className="text-xs text-gray-500">Available to stream</p>
                        </div>
                    </div>

                    {/* Revenue */}
                    <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 flex items-center transform transition-transform duration-300 hover:scale-102 hover:shadow-md">
                        <div className="rounded-full p-3 bg-yellow-100 text-yellow-600 mr-4">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    fillRule="evenodd"
                                    d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 font-medium">Monthly Revenue</p>
                            <p className="text-2xl font-bold text-gray-800">{mockStats.revenue}</p>
                            <p className="text-xs text-green-600">+4.5% from last month</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Active Rooms */}
                    <div className="lg:col-span-2 bg-white rounded-lg shadow-sm overflow-hidden h-auto">
                        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                            <h3 className="text-lg font-medium text-gray-800">Active Watch Rooms</h3>
                            <Link to="/admin/movies" className="text-sm font-medium text-blue-600 hover:text-blue-800">
                                Manage All Rooms
                            </Link>
                        </div>
                        <div className="overflow-x-auto">
                            <div className="min-h-[380px] max-h-[420px] overflow-y-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50 sticky top-0">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Movie
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Viewers
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Started
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Duration
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {activeRooms.map((room) => (
                                            <tr key={room.id} className="hover:bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <div className="flex-shrink-0 h-10 w-10 rounded overflow-hidden">
                                                            <img
                                                                src={room.posterPath}
                                                                alt={room.movieTitle}
                                                                className="h-10 w-10 object-cover"
                                                            />
                                                        </div>
                                                        <div className="ml-3 max-w-[180px]">
                                                            <div className="text-sm font-medium text-gray-900 truncate">
                                                                {room.movieTitle}
                                                            </div>
                                                            <div className="text-xs text-gray-500">ID: {room.id}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-3 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">{room.activeViewers}</div>
                                                    <div className="text-xs text-gray-500">Active viewers</div>
                                                </td>
                                                <td className="px-4 py-3 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">2:30 PM</div>
                                                </td>
                                                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                                                    1h 15m
                                                </td>
                                                <td className="px-4 py-3 whitespace-nowrap text-right text-sm font-medium">
                                                    <Link
                                                        to={`/admin/room-control/${room.movieId}`}
                                                        className="text-indigo-600 hover:text-indigo-900 mr-3"
                                                    >
                                                        Control
                                                    </Link>
                                                    <button className="text-red-600 hover:text-red-900">Close</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Recent Activities */}
                    <div className="bg-white rounded-lg shadow-sm overflow-hidden h-auto">
                        <div className="p-4 border-b border-gray-200">
                            <h3 className="text-lg font-medium text-gray-800">Recent Activities</h3>
                        </div>
                        <div className="p-4 overflow-y-auto min-h-[380px] max-h-[420px] scrollbar-hide">
                            <div className="space-y-4">
                                {recentActivities.map((activity) => (
                                    <div
                                        key={activity.id}
                                        className="flex items-start space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-colors duration-150"
                                    >
                                        <div className="flex-shrink-0">
                                            {activity.type === 'room_created' && (
                                                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </div>
                                            )}
                                            {activity.type === 'user_banned' && (
                                                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </div>
                                            )}
                                            {activity.type === 'movie_added' && (
                                                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6v4H7V5zm8 8v2h-2v-2h2zm-2-2h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-4h2v-2h-2v2zm-4 0h2v-2H7v2zm0 4h2v-2H7v2z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </div>
                                            )}
                                            {activity.type === 'room_closed' && (
                                                <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">
                                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </div>
                                            )}
                                            {activity.type === 'user_created' && (
                                                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                                                    </svg>
                                                </div>
                                            )}
                                            {activity.type === 'movie_updated' && (
                                                <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                                    </svg>
                                                </div>
                                            )}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm text-gray-900">
                                                {activity.type === 'room_created' && (
                                                    <span>
                                                        <strong>{activity.user}</strong> created a new watch room for{' '}
                                                        <strong>{activity.movie}</strong>
                                                    </span>
                                                )}
                                                {activity.type === 'user_banned' && (
                                                    <span>
                                                        <strong>{activity.user}</strong> banned user{' '}
                                                        <strong>{activity.targetUser}</strong>
                                                    </span>
                                                )}
                                                {activity.type === 'movie_added' && (
                                                    <span>
                                                        <strong>{activity.user}</strong> added new movie{' '}
                                                        <strong>{activity.movie}</strong>
                                                    </span>
                                                )}
                                                {activity.type === 'room_closed' && (
                                                    <span>
                                                        <strong>{activity.user}</strong> closed watch room for{' '}
                                                        <strong>{activity.movie}</strong>
                                                    </span>
                                                )}
                                                {activity.type === 'user_created' && (
                                                    <span>
                                                        <strong>{activity.user}</strong> registered new user{' '}
                                                        <strong>{activity.targetUser}</strong>
                                                    </span>
                                                )}
                                                {activity.type === 'movie_updated' && (
                                                    <span>
                                                        <strong>{activity.user}</strong> updated movie{' '}
                                                        <strong>{activity.movie}</strong>
                                                    </span>
                                                )}
                                            </p>
                                            <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="mt-6 bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="p-4 border-b border-gray-200">
                        <h3 className="text-lg font-medium text-gray-800">Quick Actions</h3>
                    </div>
                    <div className="p-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                        <Link
                            to="/admin/movies"
                            className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105"
                        >
                            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-3">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            <span className="text-sm font-medium text-gray-700">Create Room</span>
                        </Link>
                        <Link
                            to="/admin/movies"
                            className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105"
                        >
                            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mb-3">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
                                </svg>
                            </div>
                            <span className="text-sm font-medium text-gray-700">Add Movie</span>
                        </Link>
                        <Link
                            to="/admin/users"
                            className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105"
                        >
                            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-3">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                                </svg>
                            </div>
                            <span className="text-sm font-medium text-gray-700">Add User</span>
                        </Link>
                        <Link
                            to="/admin/settings"
                            className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105"
                        >
                            <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 mb-3">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        fillRule="evenodd"
                                        d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            <span className="text-sm font-medium text-gray-700">Settings</span>
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
