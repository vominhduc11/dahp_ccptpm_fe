import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="h-full flex flex-col bg-gray-900 text-white">
            {/* Logo section */}
            <div className="flex items-center p-4 border-b border-gray-800">
                <Link to="/admin" className="flex items-center space-x-2">
                    <svg
                        className="w-7 h-7 text-red-600"
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
                    <span className="text-lg font-bold">Admin</span>
                </Link>
            </div>

            {/* Navigation Links - non-scrollable */}
            <div className="flex-1 py-2">
                <nav className="px-4">
                    <ul className="space-y-1">
                        <li>
                            <Link
                                to="/"
                                className="flex items-center space-x-2 p-2 rounded-md bg-gray-800 text-white font-medium hover:bg-gray-700 transition-colors duration-200"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                                </svg>
                                <span>Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/UserManagement"
                                className="flex items-center space-x-2 p-2 rounded-md text-gray-300 font-medium hover:bg-gray-800 transition-colors duration-200"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                                </svg>
                                <span>Users</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/MovieManagement"
                                className="flex items-center space-x-2 p-2 rounded-md text-gray-300 font-medium hover:bg-gray-800 transition-colors duration-200"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        fillRule="evenodd"
                                        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6v4H7V5zm8 8v2h-2v-2h2zm-2-2h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-4h2v-2h-2v2zm-4 0h2v-2H7v2zm0 4h2v-2H7v2z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span>Movies</span>
                            </Link>
                        </li>
                        <li>
                            <div className="pt-3 pb-1 pl-2 text-xs uppercase text-gray-500 font-semibold">Settings</div>
                        </li>
                        <li>
                            <Link
                                to="/admin/settings"
                                className="flex items-center space-x-2 p-2 rounded-md text-gray-300 font-medium hover:bg-gray-800 transition-colors duration-200"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        fillRule="evenodd"
                                        d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span>Settings</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* User profile section at bottom */}
            <div className="p-4 border-t border-gray-800">
                <div className="flex items-center space-x-3">
                    <img
                        src="https://via.placeholder.com/36"
                        alt="Admin"
                        className="w-10 h-10 rounded-full border-2 border-gray-700"
                    />
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-white truncate">Admin User</p>
                        <p className="text-xs text-gray-400 truncate">admin@example.com</p>
                    </div>
                    <button className="text-gray-400 hover:text-white">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
