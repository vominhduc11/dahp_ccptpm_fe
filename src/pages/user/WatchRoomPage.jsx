import { Link } from 'react-router-dom';
import ChatComponent from '../../components/UI/user/WatchRoomPage/ChatComponent';
import movie from '../../Data/movie3';

const WatchRoomPage = () => {
    // Static room status - options: 'waiting', 'playing', 'paused'
    const roomStatus = 'playing';
    const isPlaying = roomStatus === 'playing';
    const roomJoined = true;

    return (
        <div className="min-h-screen bg-gray-950 text-white flex flex-col">
            {/* Top navigation bar */}
            <div className="bg-gray-900 shadow-md py-3 px-4">
                <div className="container mx-auto flex items-center justify-between">
                    <Link to="/" className="flex items-center space-x-2">
                        <svg
                            className="w-8 h-8 text-red-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6v4H7V5zm8 8v2h-2v-2h2zm-2-2h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-4h2v-2h-2v2zm-4 0h2v-2H7v2zm0 4h2v-2H7v2z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <span className="text-xl font-bold">MovieStream</span>
                    </Link>

                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                            <div
                                className={`w-3 h-3 rounded-full ${roomStatus === 'waiting' ? 'bg-yellow-500' : roomStatus === 'playing' ? 'bg-green-500' : 'bg-red-500'} animate-pulse`}
                            ></div>
                            <span className="text-sm font-medium">
                                {roomStatus === 'waiting' ? 'Waiting' : roomStatus === 'playing' ? 'Playing' : 'Paused'}
                            </span>
                        </div>
                        <Link to="#" className="text-sm text-gray-300 hover:text-white transition-colors duration-300">
                            Movie Details
                        </Link>
                        <button className="text-sm text-red-500 hover:text-red-400 transition-colors duration-300">
                            Leave Room
                        </button>
                    </div>
                </div>
            </div>

            {/* Main content */}
            <div className="flex-grow flex flex-col lg:flex-row h-[calc(100vh-56px)]">
                {/* Video player section */}
                <div className="w-full lg:w-3/4 bg-black h-full lg:h-auto">
                    {!roomJoined ? (
                        // Join room view
                        <div className="h-full flex flex-col items-center justify-center p-8">
                            <div className="text-center max-w-lg animate-fade-in">
                                <h2 className="text-2xl md:text-3xl font-bold mb-4">{movie.title}</h2>
                                <p className="text-gray-300 mb-8">
                                    You're about to join a watch room hosted by an admin. Everyone watches the movie
                                    together, with playback controlled by the admin.
                                </p>
                                <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300">
                                    Join Watch Room
                                </button>
                            </div>
                        </div>
                    ) : (
                        // Video player view
                        <div className="relative pt-[56.25%] bg-black">
                            {/* Video element */}
                            <video
                                className="absolute top-0 left-0 w-full h-full"
                                poster={movie.backdropPath}
                                controls={false}
                            >
                                <source
                                    src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                                    type="video/mp4"
                                />
                                Your browser does not support the video tag.
                            </video>

                            {/* Video overlay with status message */}
                            {(roomStatus === 'waiting' || roomStatus === 'paused') && (
                                <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="mb-4">
                                            {roomStatus === 'waiting' ? (
                                                <svg
                                                    className="w-16 h-16 mx-auto text-yellow-500 animate-pulse"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            ) : (
                                                <svg
                                                    className="w-16 h-16 mx-auto text-white"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            )}
                                        </div>
                                        <h3 className="text-xl font-bold">
                                            {roomStatus === 'waiting'
                                                ? 'Waiting for admin to start the movie'
                                                : 'Movie paused by admin'}
                                        </h3>
                                        <p className="text-gray-400 mt-2">
                                            {roomStatus === 'waiting' ? 'Please stand by...' : 'Will resume shortly...'}
                                        </p>
                                    </div>
                                </div>
                            )}

                            {/* Video control overlay (info only, controls disabled for user) */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <button className="text-white opacity-50 cursor-not-allowed" disabled>
                                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                                {isPlaying ? (
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                        clipRule="evenodd"
                                                    />
                                                ) : (
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                                        clipRule="evenodd"
                                                    />
                                                )}
                                            </svg>
                                        </button>
                                        <div className="text-sm text-white/70">Playback controlled by admin</div>
                                    </div>
                                    <div className="text-sm text-white/70">
                                        {roomStatus === 'playing'
                                            ? 'Playing'
                                            : roomStatus === 'paused'
                                              ? 'Paused'
                                              : 'Waiting'}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Chat and users section */}
                <ChatComponent />
            </div>
        </div>
    );
};

export default WatchRoomPage;
