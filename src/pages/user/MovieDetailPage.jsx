import React from 'react';
import { Link } from 'react-router-dom';
import similarMovies from '../../Data/similarMovies';
import movie from '../../Data/movie1';

const MovieDetailPage = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-white">
            {/* Hero Section with Backdrop */}
            <div className="relative pt-16">
                {/* Backdrop image */}
                <div className="absolute inset-0 h-[70vh] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-gray-900/40 z-10"></div>
                    <img
                        src={movie.backdropPath}
                        alt={movie.title}
                        className="w-full h-full object-cover object-center"
                    />
                </div>

                {/* Movie info overlay */}
                <div className="container mx-auto px-4 relative z-20 pt-24 pb-16">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        {/* Poster */}
                        <div className="w-full md:w-1/3 lg:w-1/4 flex-shrink-0 animate-fade-in">
                            <div className="relative rounded-lg overflow-hidden shadow-2xl">
                                <img src={movie.posterPath} alt={movie.title} className="w-full h-auto" />
                                {movie.hasActiveRoom && (
                                    <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                                        LIVE NOW
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Movie info */}
                        <div className="w-full md:w-2/3 lg:w-3/4 animate-slide-up">
                            <h1 className="text-3xl md:text-5xl font-bold mb-2">{movie.title}</h1>

                            {/* Meta info row */}
                            <div className="flex flex-wrap items-center gap-4 text-sm md:text-base text-gray-300 mb-6">
                                <span>{movie.releaseYear}</span>
                                <span className="flex items-center">
                                    <svg
                                        className="w-5 h-5 text-yellow-500 mr-1"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    {movie.rating}
                                </span>
                                <span>{movie.duration}</span>
                                <div className="flex flex-wrap gap-2">
                                    {movie.genres.map((genre, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-gray-800 rounded-full text-xs font-semibold"
                                        >
                                            {genre}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Action buttons */}
                            <div className="flex flex-wrap gap-4 mb-8">
                                <Link
                                    to={movie.hasActiveRoom ? `/watch-room/${movie.id}` : '#'}
                                    className={`py-3 px-6 rounded-full flex items-center gap-2 font-semibold transition-colors duration-300 ${
                                        movie.hasActiveRoom
                                            ? 'bg-red-600 hover:bg-red-700 text-white'
                                            : 'bg-gray-700 text-gray-300 cursor-not-allowed'
                                    }`}
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    {movie.hasActiveRoom ? 'Join Watch Room' : 'No Active Room'}
                                </Link>
                                <button className="py-3 px-6 rounded-full border-2 border-gray-700 hover:border-gray-500 text-white font-semibold flex items-center gap-2 transition-colors duration-300">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 4v16m8-8H4"
                                        />
                                    </svg>
                                    Add to Watchlist
                                </button>
                                <button className="py-3 px-6 rounded-full border-2 border-gray-700 hover:border-gray-500 text-white font-semibold flex items-center gap-2 transition-colors duration-300">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                                        />
                                    </svg>
                                    Share
                                </button>
                            </div>

                            {/* Overview */}
                            <div className="mb-8">
                                <h2 className="text-xl font-semibold mb-3">Overview</h2>
                                <p className="text-gray-300 leading-relaxed">{movie.overview}</p>
                            </div>

                            {/* Cast (mock data) */}
                            <div className="mb-8">
                                <h2 className="text-xl font-semibold mb-3">Cast</h2>
                                <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide">
                                    {Array.from({ length: 6 }).map((_, index) => (
                                        <div key={index} className="flex-none w-24">
                                            <div className="bg-gray-800 rounded-lg overflow-hidden">
                                                <div className="w-24 h-24 bg-gray-700 rounded-t-lg"></div>
                                                <div className="p-2">
                                                    <p className="text-sm font-medium truncate">Actor Name</p>
                                                    <p className="text-xs text-gray-400 truncate">Character</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Related Movies */}
            <div className="container mx-auto px-4 pb-16">
                {similarMovies.length > 0 && (
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                            {similarMovies.map((movie) => (
                                <div
                                    key={movie.id}
                                    className="bg-gray-800 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
                                >
                                    <img src={movie.posterPath} alt={movie.title} className="w-full h-auto" />
                                    <div className="p-3">
                                        <h3 className="font-medium text-sm text-white truncate">{movie.title}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MovieDetailPage;
