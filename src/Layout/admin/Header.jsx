import React from 'react';

const Header = () => {
    return (
        <header className="bg-white shadow z-10">
            <div className="px-4 py-3 flex items-center justify-between">
                {/* Mobile menu button */}
                <button className="lg:hidden text-gray-600 hover:text-gray-900">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>

                {/* Page title */}
                <h1 className="text-lg font-medium text-gray-800">Admin Dashboard</h1>

                {/* User menu */}
                <div className="flex items-center space-x-4">
                    <div className="relative">
                        <button className="text-gray-600 hover:text-gray-900">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                />
                            </svg>
                        </button>
                        <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-600"></span>
                    </div>
                    <div className="flex items-center space-x-2 cursor-pointer">
                        <img
                            src="https://via.placeholder.com/36"
                            alt="Admin"
                            className="w-9 h-9 rounded-full border-2 border-gray-200"
                        />
                        <span className="hidden md:inline-block text-sm font-medium text-gray-700">Admin User</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
