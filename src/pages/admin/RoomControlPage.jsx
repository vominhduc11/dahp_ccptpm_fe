import React from 'react';
import viewers from '../../Data/viewers';
import chatMessages from '../../Data/chatMessages1';
import movie from '../../Data/movie2';

const RoomControlPage = () => {
    // Static state values
    const isPlaying = true;
    const currentTime = 45;
    const duration = 120;
    const volume = 80;
    const isMuted = false;
    const activeTab = 'viewers';
    const selectedViewers = [1, 3];
    const roomInfo = {
        createdAt: '2025-04-11T09:30:00Z',
        viewerCount: 8,
        status: 'active'
    };

    // Helper functions (static versions)
    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = Math.floor(timeInSeconds % 60);
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    const formatMessageTime = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    const calculateElapsedTime = () => {
        return '25m';
    };

    return (
        <div className="min-h-screen bg-gray-100 overflow-auto">
            {/* Main Content */}
            <main className="flex-1 overflow-hidden bg-gray-100 flex flex-col lg:flex-row">
                {/* Video Section */}
                <div className="flex-1 p-4 overflow-y-auto flex flex-col">
                    <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-4 flex-grow flex flex-col">
                        {/* Movie title & info */}
                        <div className="p-4 border-b border-gray-200">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h2 className="text-xl font-semibold text-gray-800">{movie.title}</h2>
                                    <p className="text-sm text-gray-500">
                                        {movie.releaseYear} • {movie.duration}
                                    </p>
                                </div>
                                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                                    View Details
                                </button>
                            </div>
                        </div>

                        {/* Video player */}
                        <div className="relative flex-grow bg-black flex items-center justify-center">
                            <video className="w-full h-full max-h-[60vh]" poster={movie.backdropPath} controls={false}>
                                <source
                                    src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                                    type="video/mp4"
                                />
                                Your browser does not support the video tag.
                            </video>

                            {/* Video overlay for controls */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
                                {/* Seek bar */}
                                <div className="flex items-center mb-2">
                                    <span className="text-white text-xs mr-2">{formatTime(currentTime)}</span>
                                    <input
                                        type="range"
                                        min="0"
                                        max={duration || 100}
                                        value={currentTime}
                                        className="w-full h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer"
                                        readOnly
                                    />
                                    <span className="text-white text-xs ml-2">{formatTime(duration)}</span>
                                </div>

                                {/* Control buttons */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-4">
                                        {/* Rewind 10s */}
                                        <button className="text-white hover:text-gray-300 focus:outline-none">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M8.445 14.832A1 1 0 0010 14v-2.798l5.445 3.63A1 1 0 0017 14V6a1 1 0 00-1.555-.832L10 8.798V6a1 1 0 00-1.555-.832l-6 4a1 1 0 000 1.664l6 4z" />
                                            </svg>
                                        </button>

                                        {/* Play/Pause */}
                                        <button className="text-white hover:text-gray-300 focus:outline-none">
                                            {isPlaying ? (
                                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            ) : (
                                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            )}
                                        </button>

                                        {/* Stop */}
                                        <button className="text-white hover:text-gray-300 focus:outline-none">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </button>

                                        {/* Forward 10s */}
                                        <button className="text-white hover:text-gray-300 focus:outline-none">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798L4.555 5.168z" />
                                            </svg>
                                        </button>

                                        {/* Restart */}
                                        <button className="text-white hover:text-gray-300 focus:outline-none hidden sm:block">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </button>
                                    </div>

                                    <div className="flex items-center space-x-3">
                                        {/* Volume control */}
                                        <div className="flex items-center space-x-2">
                                            <button className="text-white hover:text-gray-300 focus:outline-none">
                                                {isMuted ? (
                                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                ) : (
                                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                )}
                                            </button>
                                            <input
                                                type="range"
                                                min="0"
                                                max="100"
                                                value={volume}
                                                className="w-16 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer sm:w-24"
                                                readOnly
                                            />
                                        </div>

                                        {/* Fullscreen */}
                                        <button className="text-white hover:text-gray-300 focus:outline-none">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 011.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 011.414-1.414L15 13.586V12a1 1 0 011-1z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Admin Controls */}
                    <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Admin Controls</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <h4 className="text-sm font-medium text-gray-700 mb-2">Room Status</h4>
                                <select
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    value="active"
                                    readOnly
                                >
                                    <option value="active">Active (Public)</option>
                                    <option value="private">Private (Invite Only)</option>
                                    <option value="paused">Paused (No New Viewers)</option>
                                </select>
                            </div>
                            <div>
                                <h4 className="text-sm font-medium text-gray-700 mb-2">Playback Control</h4>
                                <div className="flex space-x-2">
                                    <button
                                        className={`flex-1 py-2 px-3 rounded-lg text-white font-medium ${isPlaying ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'} transition-colors duration-200`}
                                    >
                                        {isPlaying ? 'Pause' : 'Play'}
                                    </button>
                                    <button className="flex-1 py-2 px-3 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors duration-200">
                                        Stop
                                    </button>
                                    <button className="flex-1 py-2 px-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200">
                                        Restart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Playback Info */}
                    <div className="bg-white rounded-lg shadow-sm p-4 hidden md:block">
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Playback Information</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div>
                                <h4 className="text-xs text-gray-500">Current Position</h4>
                                <p className="text-sm font-medium">
                                    {formatTime(currentTime)} / {formatTime(duration)}
                                </p>
                            </div>
                            <div>
                                <h4 className="text-xs text-gray-500">Status</h4>
                                <p className="text-sm font-medium">{isPlaying ? 'Playing' : 'Paused'}</p>
                            </div>
                            <div>
                                <h4 className="text-xs text-gray-500">Active Viewers</h4>
                                <p className="text-sm font-medium">{roomInfo.viewerCount}</p>
                            </div>
                            <div>
                                <h4 className="text-xs text-gray-500">Room Duration</h4>
                                <p className="text-sm font-medium">{calculateElapsedTime()}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Chat & Viewers Section */}
                <div className="w-full lg:w-80 p-4 overflow-hidden flex flex-col">
                    {/* Tabs */}
                    <div className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col h-full">
                        <div className="flex border-b border-gray-200">
                            <button
                                className={`flex-1 py-3 text-center font-medium transition-colors duration-200 ${activeTab === 'viewers' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
                            >
                                Viewers ({viewers.length})
                            </button>
                            <button
                                className={`flex-1 py-3 text-center font-medium transition-colors duration-200 ${activeTab === 'chat' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
                            >
                                Chat
                            </button>
                        </div>

                        {/* Viewers List */}
                        {activeTab === 'viewers' && (
                            <div className="flex-grow flex flex-col">
                                <div className="p-3 border-b border-gray-200 flex items-center justify-between">
                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                            checked={selectedViewers.length === viewers.length}
                                            readOnly
                                        />
                                        {selectedViewers.length > 0 && (
                                            <span className="ml-2 text-sm text-gray-700">
                                                {selectedViewers.length} selected
                                            </span>
                                        )}
                                    </div>
                                    {selectedViewers.length > 0 && (
                                        <button className="text-sm text-red-600 hover:text-red-900 font-medium">
                                            Kick Selected
                                        </button>
                                    )}
                                </div>

                                <div className="flex-grow overflow-y-auto">
                                    <ul className="divide-y divide-gray-200">
                                        {viewers.map((viewer) => (
                                            <li key={viewer.id} className="px-4 py-3 hover:bg-gray-50">
                                                <div className="flex items-center space-x-3">
                                                    <input
                                                        type="checkbox"
                                                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                                        checked={selectedViewers.includes(viewer.id)}
                                                        readOnly
                                                    />
                                                    <img
                                                        src={viewer.avatar}
                                                        alt={viewer.name}
                                                        className="h-8 w-8 rounded-full"
                                                    />
                                                    <div className="flex-1 min-w-0">
                                                        <p className="text-sm font-medium text-gray-900 truncate">
                                                            {viewer.name}
                                                        </p>
                                                        <div className="flex items-center">
                                                            <span
                                                                className={`inline-block h-2 w-2 rounded-full mr-1 ${viewer.status === 'active' ? 'bg-green-500' : viewer.status === 'away' ? 'bg-yellow-500' : 'bg-gray-500'}`}
                                                            ></span>
                                                            <p className="text-xs text-gray-500 truncate capitalize">
                                                                {viewer.status}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <button
                                                        className="text-red-600 hover:text-red-900"
                                                        title="Kick viewer"
                                                    >
                                                        <svg
                                                            className="w-5 h-5"
                                                            fill="currentColor"
                                                            viewBox="0 0 20 20"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}

                        {/* Chat - this is hidden in our static version because activeTab is set to 'viewers' */}
                        {activeTab !== 'viewers' && (
                            <div className="flex-grow flex flex-col">
                                {/* Chat messages */}
                                <div className="flex-grow overflow-y-auto p-4 space-y-3">
                                    {chatMessages.map((msg) => (
                                        <div
                                            key={msg.id}
                                            className={`flex ${msg.userId === 0 ? 'justify-center' : 'items-start space-x-2'}`}
                                        >
                                            {msg.userId !== 0 && (
                                                <div className="w-8 h-8 rounded-full bg-gray-300 flex-shrink-0 overflow-hidden">
                                                    {msg.userId === 999 && (
                                                        <div className="bg-red-600 text-white text-xs font-bold flex items-center justify-center h-full">
                                                            A
                                                        </div>
                                                    )}
                                                </div>
                                            )}

                                            {/* Message content */}
                                            <div
                                                className={`flex-grow ${msg.userId === 0 ? 'text-gray-500 text-xs italic bg-gray-100 px-3 py-1 rounded-lg' : ''}`}
                                            >
                                                {msg.userId !== 0 && (
                                                    <div className="flex items-center space-x-2">
                                                        <span
                                                            className={`font-medium ${msg.userId === 999 ? 'text-red-600' : 'text-gray-900'}`}
                                                        >
                                                            {msg.userName}
                                                        </span>
                                                        <span className="text-gray-400 text-xs">
                                                            {formatMessageTime(msg.timestamp)}
                                                        </span>
                                                    </div>
                                                )}
                                                <p
                                                    className={`text-sm ${msg.userId === 0 ? '' : 'mt-1 text-gray-700'}`}
                                                >
                                                    {msg.message}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Message input */}
                                <form className="p-3 border-t border-gray-200">
                                    <div className="flex space-x-2">
                                        <input
                                            type="text"
                                            placeholder="Send message to viewers..."
                                            className="flex-grow bg-gray-100 text-gray-900 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                                        />
                                        <button
                                            type="button"
                                            className="rounded-full p-2 bg-gray-300 text-gray-500 cursor-not-allowed"
                                        >
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                                            </svg>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default RoomControlPage;
