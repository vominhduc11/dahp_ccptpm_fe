import React from 'react';
import { Link } from 'react-router-dom';

const MovieManagement = () => {
    // Static mock data
    const mockMovies = [
        {
            id: 1,
            title: 'The Last Voyage',
            overview:
                'In a world where space travel is commonplace, a renowned astronaut embarks on a mission to explore an uncharted region of space. What was supposed to be her final mission turns into a desperate fight for survival as she uncovers secrets that were never meant to be found.',
            backdropPath: 'https://via.placeholder.com/1920x1080?text=The+Last+Voyage',
            posterPath: 'https://via.placeholder.com/500x750?text=The+Last+Voyage',
            rating: '8.7',
            releaseYear: '2025',
            duration: '2h 18m',
            genres: ['Sci-Fi', 'Adventure', 'Drama'],
            status: 'Featured',
            views: 12453,
            hasActiveRoom: true,
            addedBy: 'Admin',
            addedDate: '2025-01-15T08:30:00Z'
        },
        {
            id: 2,
            title: 'Midnight in Tokyo',
            overview:
                'A lost tourist in Tokyo meets a mysterious local who shows him the hidden wonders of the city during one unforgettable night.',
            posterPath: 'https://via.placeholder.com/500x750?text=Midnight+in+Tokyo',
            backdropPath: 'https://via.placeholder.com/1920x1080?text=Midnight+in+Tokyo',
            rating: '9.1',
            releaseYear: '2024',
            duration: '1h 55m',
            genres: ['Drama', 'Romance'],
            status: 'Active',
            views: 8972,
            hasActiveRoom: false,
            addedBy: 'Content Manager',
            addedDate: '2025-02-20T10:15:00Z'
        },
        {
            id: 3,
            title: 'The Shadow King',
            overview:
                "When a powerful artifact is stolen, a former thief must work with authorities to recover it before it's used to awaken an ancient evil.",
            posterPath: 'https://via.placeholder.com/500x750?text=The+Shadow+King',
            backdropPath: 'https://via.placeholder.com/1920x1080?text=The+Shadow+King',
            rating: '7.9',
            releaseYear: '2024',
            duration: '2h 05m',
            genres: ['Fantasy', 'Action', 'Thriller'],
            status: 'Active',
            views: 7564,
            hasActiveRoom: true,
            addedBy: 'Admin',
            addedDate: '2025-01-30T14:45:00Z'
        },
        {
            id: 4,
            title: 'Eternal Echo',
            overview:
                'A scientist develops technology that can capture memories, but soon discovers the dangerous implications of tampering with the human mind.',
            posterPath: 'https://via.placeholder.com/500x750?text=Eternal+Echo',
            backdropPath: 'https://via.placeholder.com/1920x1080?text=Eternal+Echo',
            rating: '8.3',
            releaseYear: '2024',
            duration: '2h 12m',
            genres: ['Sci-Fi', 'Thriller', 'Drama'],
            status: 'Active',
            views: 6234,
            hasActiveRoom: false,
            addedBy: 'Content Manager',
            addedDate: '2025-02-05T09:20:00Z'
        },
        {
            id: 5,
            title: 'Desert Wind',
            overview:
                'A journalist travels to a remote desert community to investigate a series of mysterious disappearances, only to find herself caught in an ancient conflict.',
            posterPath: 'https://via.placeholder.com/500x750?text=Desert+Wind',
            backdropPath: 'https://via.placeholder.com/1920x1080?text=Desert+Wind',
            rating: '7.7',
            releaseYear: '2023',
            duration: '1h 58m',
            genres: ['Mystery', 'Adventure', 'Thriller'],
            status: 'Active',
            views: 6234,
            hasActiveRoom: false,
            addedBy: 'Admin',
            addedDate: '2025-01-10T11:30:00Z'
        },
        {
            id: 6,
            title: 'Cold Pursuit',
            overview:
                'In the frozen Canadian wilderness, a tracker must find a missing group of hikers before a massive storm hits, while evading a ruthless killer.',
            posterPath: 'https://via.placeholder.com/500x750?text=Cold+Pursuit',
            backdropPath: 'https://via.placeholder.com/1920x1080?text=Cold+Pursuit',
            rating: '8.1',
            releaseYear: '2024',
            duration: '2h 05m',
            genres: ['Action', 'Thriller', 'Mystery'],
            status: 'Active',
            views: 4897,
            hasActiveRoom: true,
            addedBy: 'Content Manager',
            addedDate: '2025-03-15T10:00:00Z'
        },
        {
            id: 7,
            title: 'Virtual Horizon',
            overview:
                'As virtual reality technology advances, a game developer creates a world so immersive that players can no longer distinguish between reality and the game.',
            posterPath: 'https://via.placeholder.com/500x750?text=Virtual+Horizon',
            backdropPath: 'https://via.placeholder.com/1920x1080?text=Virtual+Horizon',
            rating: '8.5',
            releaseYear: '2025',
            duration: '2h 10m',
            genres: ['Sci-Fi', 'Thriller'],
            status: 'Active',
            views: 7632,
            hasActiveRoom: false,
            addedBy: 'Admin',
            addedDate: '2025-03-01T14:20:00Z'
        },
        {
            id: 8,
            title: "The Ocean's Secret",
            overview:
                'A marine biologist discovers a new species in the deepest parts of the ocean, triggering a series of events that threatens global security.',
            posterPath: "https://via.placeholder.com/500x750?text=The+Ocean's+Secret",
            backdropPath: "https://via.placeholder.com/1920x1080?text=The+Ocean's+Secret",
            rating: '8.9',
            releaseYear: '2025',
            duration: '2h 22m',
            genres: ['Adventure', 'Sci-Fi', 'Thriller'],
            status: 'Featured',
            views: 9876,
            hasActiveRoom: true,
            addedBy: 'Content Manager',
            addedDate: '2025-02-25T09:15:00Z'
        }
    ];

    // Available genres for filter
    const availableGenres = [
        'Action',
        'Adventure',
        'Animation',
        'Comedy',
        'Crime',
        'Documentary',
        'Drama',
        'Family',
        'Fantasy',
        'History',
        'Horror',
        'Music',
        'Mystery',
        'Romance',
        'Science Fiction',
        'Sci-Fi',
        'TV Movie',
        'Thriller',
        'War',
        'Western'
    ];

    // Static counts for display
    const featuredMoviesCount = mockMovies.filter((m) => m.status === 'Featured').length;
    const activeRoomsCount = mockMovies.filter((m) => m.hasActiveRoom).length;
    const totalViews = mockMovies.reduce((sum, movie) => sum + movie.views, 0);
    const selectedMovies = [1, 3]; // Static selection for display purposes

    return (
        <div className="min-h-screen bg-gray-100 overflow-auto">
            {/* Main Content */}
            <main className="flex-1 overflow-y-auto bg-gray-100 p-4 md:p-6 pb-16">
                {/* Movie dashboard header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">Movies</h2>
                        <p className="text-gray-600">Manage your streaming content</p>
                    </div>
                    <div className="mt-4 md:mt-0">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors duration-200">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    fillRule="evenodd"
                                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span>Add Movie</span>
                        </button>
                    </div>
                </div>

                {/* Stats cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    <div className="bg-white rounded-lg shadow-sm p-5">
                        <div className="flex items-center">
                            <div className="rounded-full p-3 bg-blue-100 text-blue-600 mr-4">
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
                                <p className="text-2xl font-bold text-gray-800">{mockMovies.length}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-sm p-5">
                        <div className="flex items-center">
                            <div className="rounded-full p-3 bg-purple-100 text-purple-600 mr-4">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 font-medium">Featured Movies</p>
                                <p className="text-2xl font-bold text-gray-800">{featuredMoviesCount}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-sm p-5">
                        <div className="flex items-center">
                            <div className="rounded-full p-3 bg-green-100 text-green-600 mr-4">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 font-medium">Active Rooms</p>
                                <p className="text-2xl font-bold text-gray-800">{activeRoomsCount}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-sm p-5">
                        <div className="flex items-center">
                            <div className="rounded-full p-3 bg-yellow-100 text-yellow-600 mr-4">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                    <path
                                        fillRule="evenodd"
                                        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 font-medium">Total Views</p>
                                <p className="text-2xl font-bold text-gray-800">{totalViews.toLocaleString()}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Filters and search */}
                <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
                    <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
                        {/* Search input */}
                        <div className="relative flex-grow">
                            <input
                                type="text"
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Search movies..."
                            />
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        fillRule="evenodd"
                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                        </div>

                        {/* Status filter */}
                        <div className="min-w-[120px]">
                            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                                <option value="All">All Status</option>
                                <option value="Active">Active</option>
                                <option value="Featured">Featured</option>
                            </select>
                        </div>

                        {/* Genre filter */}
                        <div className="min-w-[150px]">
                            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                                <option value="All">All Genres</option>
                                {availableGenres.map((genre) => (
                                    <option key={genre} value={genre}>
                                        {genre}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Room filter */}
                        <div className="min-w-[150px]">
                            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                                <option value="All">All Rooms</option>
                                <option value="Active">Active Rooms</option>
                                <option value="Inactive">No Room</option>
                            </select>
                        </div>

                        {/* Sort options */}
                        <div className="min-w-[150px]">
                            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                                <option value="title-asc">Title (A-Z)</option>
                                <option value="title-desc">Title (Z-A)</option>
                                <option value="date-desc">Newest First</option>
                                <option value="date-asc">Oldest First</option>
                                <option value="rating-desc">Highest Rated</option>
                                <option value="rating-asc">Lowest Rated</option>
                                <option value="views-desc">Most Viewed</option>
                                <option value="views-asc">Least Viewed</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Movies table */}
                <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6 flex flex-col h-full">
                    {/* Table header with bulk actions */}
                    <div className="border-b border-gray-200 bg-gray-50 px-4 py-3 flex items-center z-10">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            />
                            {selectedMovies.length > 0 && (
                                <div className="ml-3">
                                    <span className="text-sm text-gray-700">{selectedMovies.length} selected</span>
                                    <button className="ml-3 text-sm text-red-600 hover:text-red-900 font-medium">
                                        Delete Selected
                                    </button>
                                </div>
                            )}
                        </div>
                        <div className="ml-auto text-sm text-gray-500">{mockMovies.length} movies found</div>
                    </div>

                    {/* Table content */}
                    <div className="overflow-y-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50 sticky top-0 z-10">
                                <tr>
                                    <th scope="col" className="w-12 px-4 py-3"></th>
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
                                        Details
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Stats
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Status
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
                                {mockMovies.map((movie) => (
                                    <tr key={movie.id} className="hover:bg-gray-50">
                                        <td className="px-4 py-3 whitespace-nowrap">
                                            <input
                                                type="checkbox"
                                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                                checked={selectedMovies.includes(movie.id)}
                                                readOnly
                                            />
                                        </td>
                                        <td className="px-4 py-3 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 h-12 w-8 md:h-16 md:w-11 rounded overflow-hidden">
                                                    <img
                                                        className="h-full w-full object-cover"
                                                        src={movie.posterPath}
                                                        alt={movie.title}
                                                    />
                                                </div>
                                                <div className="ml-4 max-w-xs">
                                                    <div className="text-sm font-medium text-gray-900 line-clamp-1">
                                                        {movie.title}
                                                    </div>
                                                    <div className="text-xs text-gray-500 line-clamp-2">
                                                        {movie.overview}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">
                                                {movie.releaseYear} | {movie.duration}
                                            </div>
                                            <div className="text-xs text-gray-500">
                                                {movie.genres.slice(0, 3).join(', ')}
                                                {movie.genres.length > 3 ? '...' : ''}
                                            </div>
                                        </td>
                                        <td className="px-4 py-3 whitespace-nowrap">
                                            <div className="flex items-center text-sm">
                                                <svg
                                                    className="w-4 h-4 text-yellow-500 mr-1"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                {movie.rating}
                                            </div>
                                            <div className="flex items-center text-xs text-gray-500 mt-1">
                                                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                                {movie.views.toLocaleString()} views
                                            </div>
                                        </td>
                                        <td className="px-4 py-3 whitespace-nowrap">
                                            <div className="flex flex-col space-y-1">
                                                <span
                                                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                                        movie.status === 'Featured'
                                                            ? 'bg-purple-100 text-purple-800'
                                                            : 'bg-green-100 text-green-800'
                                                    }`}
                                                >
                                                    {movie.status}
                                                </span>
                                                <span
                                                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                                        movie.hasActiveRoom
                                                            ? 'bg-blue-100 text-blue-800'
                                                            : 'bg-gray-100 text-gray-800'
                                                    }`}
                                                >
                                                    {movie.hasActiveRoom ? 'Room Active' : 'No Room'}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3 whitespace-nowrap text-right text-sm font-medium">
                                            <div className="flex justify-end space-x-2">
                                                <button
                                                    className="text-blue-600 hover:text-blue-900"
                                                    title="Edit Movie"
                                                >
                                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                                    </svg>
                                                </button>
                                                <button
                                                    className={
                                                        movie.status === 'Featured'
                                                            ? 'text-gray-600 hover:text-gray-900'
                                                            : 'text-purple-600 hover:text-purple-900'
                                                    }
                                                    title={
                                                        movie.status === 'Featured'
                                                            ? 'Remove from Featured'
                                                            : 'Add to Featured'
                                                    }
                                                >
                                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                </button>
                                                {movie.hasActiveRoom ? (
                                                    <Link to={`/RoomControlPage`}>
                                                        <button
                                                            className="text-green-600 hover:text-green-900"
                                                            title="Control Room"
                                                        >
                                                            <svg
                                                                className="w-5 h-5"
                                                                fill="currentColor"
                                                                viewBox="0 0 20 20"
                                                            >
                                                                <path
                                                                    fillRule="evenodd"
                                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                                                    clipRule="evenodd"
                                                                />
                                                            </svg>
                                                        </button>
                                                    </Link>
                                                ) : (
                                                    <button
                                                        className="text-blue-600 hover:text-blue-900"
                                                        title="Create Room"
                                                    >
                                                        <svg
                                                            className="w-5 h-5"
                                                            fill="currentColor"
                                                            viewBox="0 0 20 20"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    </button>
                                                )}
                                                {movie.hasActiveRoom && (
                                                    <button
                                                        className="text-red-600 hover:text-red-900"
                                                        title="Close Room"
                                                    >
                                                        <svg
                                                            className="w-5 h-5"
                                                            fill="currentColor"
                                                            viewBox="0 0 20 20"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    </button>
                                                )}
                                                <button
                                                    className="text-red-600 hover:text-red-900"
                                                    title="Delete Movie"
                                                >
                                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6 mt-auto">
                        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                            <div>
                                <p className="text-sm text-gray-700">
                                    Showing <span className="font-medium">1</span> to{' '}
                                    <span className="font-medium">{Math.min(8, mockMovies.length)}</span> of{' '}
                                    <span className="font-medium">{mockMovies.length}</span> results
                                </p>
                            </div>
                            <div>
                                <nav
                                    className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                                    aria-label="Pagination"
                                >
                                    <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-300 cursor-not-allowed">
                                        <span className="sr-only">Previous</span>
                                        <svg
                                            className="h-5 w-5"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>

                                    <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 z-10 bg-blue-50 border-blue-500 text-blue-600 text-sm font-medium">
                                        1
                                    </button>

                                    {mockMovies.length > 8 && (
                                        <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                                            2
                                        </button>
                                    )}

                                    <button
                                        className={`relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium ${
                                            mockMovies.length <= 8
                                                ? 'text-gray-300 cursor-not-allowed'
                                                : 'text-gray-500 hover:bg-gray-50'
                                        }`}
                                    >
                                        <span className="sr-only">Next</span>
                                        <svg
                                            className="h-5 w-5"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default MovieManagement;
