import React from 'react';
import trendingMovies from '../../Data/trendingMovies';
import newReleases from '../../Data/newReleases';
import actionMovies from '../../Data/actionMovies';
import comedyMovies from '../../Data/comedyMovies';
import movie from '../../Data/movie';
import { Link } from 'react-router-dom';

const FeaturedMovie = () => {
    return (
        <div className="relative w-full h-screen">
            {/* Backdrop image with gradient overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{
                    backgroundImage: `url(${movie.posterUrl})`,
                    backgroundPosition: 'center 20%'
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-0"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-0"></div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
                <div className="max-w-2xl">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">{movie.title}</h1>

                    <div className="flex items-center space-x-4 mb-6">
                        <span className="text-red-600 font-semibold">{movie.releaseYear}</span>
                        <span className="bg-gray-800 text-white px-2 py-1 rounded text-sm">{movie.rating}/10</span>
                        <span>
                            {Math.floor(movie.duration / 60)}h {movie.duration % 60}m
                        </span>
                    </div>

                    <p className="text-lg text-gray-300 mb-8">{movie.description}</p>

                    <div className="flex space-x-4">
                        <Link to={`/movie/${movie.id}`}>
                            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg flex items-center transition-colors duration-300">
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                                Watch Now
                            </button>
                        </Link>
                        <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg flex items-center transition-colors duration-300">
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                                <path
                                    fillRule="evenodd"
                                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            More Info
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const MovieCard = ({ movie }) => {
    return (
        <div className="relative group">
            <div className="overflow-hidden rounded-lg bg-gray-800 shadow-lg">
                <img
                    src={movie.posterUrl}
                    alt={movie.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h3 className="text-white font-semibold">{movie.title}</h3>
                    <div className="flex items-center space-x-2 text-sm mt-1">
                        <span className="text-red-500">{movie.releaseYear}</span>
                        <span>•</span>
                        <span className="text-gray-300">
                            {Math.floor(movie.duration / 60)}h {movie.duration % 60}m
                        </span>
                    </div>
                    <div className="flex items-center space-x-2 mt-2">
                        <button className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-full transition-colors">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </button>
                        <button className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-full transition-colors">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const MovieRow = ({ title, movies }) => {
    return (
        <div className="mb-10">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">{title}</h2>
                <button className="text-gray-400 hover:text-white transition-colors flex items-center text-sm">
                    View All
                    <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {movies.map((movie, index) => (
                    <MovieCard key={index} movie={movie} />
                ))}
            </div>
        </div>
    );
};

const HomePage = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <FeaturedMovie />

            <div className="container mx-auto px-4 pb-16 space-y-8">
                <MovieRow title="Trending Now" movies={trendingMovies} />
                <MovieRow title="New Releases" movies={newReleases} />
                <MovieRow title="Action Movies" movies={actionMovies} />
                <MovieRow title="Comedy Movies" movies={comedyMovies} />
            </div>
        </div>
    );
};

export default HomePage;
