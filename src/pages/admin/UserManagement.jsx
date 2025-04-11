import React from 'react';

// Static mock data
const mockUsers = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
        role: 'User',
        status: 'Active',
        lastLogin: '2025-04-10T10:30:00Z',
        avatar: 'https://via.placeholder.com/40',
        joinDate: '2024-01-15T08:00:00Z',
        watchCount: 42
    },
    {
        id: 2,
        name: 'Jane Smith',
        email: 'jane@example.com',
        role: 'Admin',
        status: 'Active',
        lastLogin: '2025-04-11T09:15:00Z',
        avatar: 'https://via.placeholder.com/40',
        joinDate: '2024-02-20T14:30:00Z',
        watchCount: 128
    },
    {
        id: 3,
        name: 'Robert Johnson',
        email: 'robert@example.com',
        role: 'User',
        status: 'Inactive',
        lastLogin: '2025-03-25T16:45:00Z',
        avatar: 'https://via.placeholder.com/40',
        joinDate: '2024-03-10T11:20:00Z',
        watchCount: 17
    },
    {
        id: 4,
        name: 'Sarah Williams',
        email: 'sarah@example.com',
        role: 'User',
        status: 'Active',
        lastLogin: '2025-04-09T14:20:00Z',
        avatar: 'https://via.placeholder.com/40',
        joinDate: '2024-02-05T09:15:00Z',
        watchCount: 64
    },
    {
        id: 5,
        name: 'Michael Brown',
        email: 'michael@example.com',
        role: 'Content Manager',
        status: 'Active',
        lastLogin: '2025-04-10T11:30:00Z',
        avatar: 'https://via.placeholder.com/40',
        joinDate: '2024-01-30T10:45:00Z',
        watchCount: 85
    },
    {
        id: 6,
        name: 'Emily Davis',
        email: 'emily@example.com',
        role: 'User',
        status: 'Banned',
        lastLogin: '2025-03-15T08:30:00Z',
        avatar: 'https://via.placeholder.com/40',
        joinDate: '2024-02-15T13:10:00Z',
        watchCount: 12
    },
    {
        id: 7,
        name: 'David Miller',
        email: 'david@example.com',
        role: 'User',
        status: 'Active',
        lastLogin: '2025-04-08T17:15:00Z',
        avatar: 'https://via.placeholder.com/40',
        joinDate: '2024-03-05T15:30:00Z',
        watchCount: 38
    },
    {
        id: 8,
        name: 'Olivia Wilson',
        email: 'olivia@example.com',
        role: 'User',
        status: 'Active',
        lastLogin: '2025-04-11T08:45:00Z',
        avatar: 'https://via.placeholder.com/40',
        joinDate: '2024-01-20T09:00:00Z',
        watchCount: 56
    }
];

const UserManagement = () => {
    // Static data for display
    const users = mockUsers;
    const activeUsers = users.filter((u) => u.status === 'Active').length;
    const bannedUsers = users.filter((u) => u.status === 'Banned').length;
    const adminUsers = users.filter((u) => u.role === 'Admin').length;

    // Helper function to format date
    const formatDate = (dateString) => {
        if (!dateString) return 'Never';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
    };

    // Helper for time since
    const getTimeSince = (dateString) => {
        if (!dateString) return 'Never';

        const date = new Date(dateString);
        const now = new Date();
        const diffMs = now - date;
        const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

        if (diffDays === 0) {
            const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
            if (diffHours === 0) {
                const diffMinutes = Math.floor(diffMs / (1000 * 60));
                return `${diffMinutes} minutes ago`;
            }
            return `${diffHours} hours ago`;
        } else if (diffDays === 1) {
            return 'Yesterday';
        } else {
            return `${diffDays} days ago`;
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 overflow-auto">
            {/* Main Content */}
            <main className="flex-1 overflow-y-auto bg-gray-100 p-4 md:p-6 pb-16">
                {/* User dashboard header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">Users</h2>
                        <p className="text-gray-600">Manage your platform users</p>
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
                            <span>Add User</span>
                        </button>
                    </div>
                </div>

                {/* Stats cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    <div className="bg-white rounded-lg shadow-sm p-5">
                        <div className="flex items-center">
                            <div className="rounded-full p-3 bg-blue-100 text-blue-600 mr-4">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 font-medium">Total Users</p>
                                <p className="text-2xl font-bold text-gray-800">{users.length}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-sm p-5">
                        <div className="flex items-center">
                            <div className="rounded-full p-3 bg-green-100 text-green-600 mr-4">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 font-medium">Active Users</p>
                                <p className="text-2xl font-bold text-gray-800">{activeUsers}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-sm p-5">
                        <div className="flex items-center">
                            <div className="rounded-full p-3 bg-red-100 text-red-600 mr-4">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        fillRule="evenodd"
                                        d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 font-medium">Banned Users</p>
                                <p className="text-2xl font-bold text-gray-800">{bannedUsers}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-sm p-5">
                        <div className="flex items-center">
                            <div className="rounded-full p-3 bg-purple-100 text-purple-600 mr-4">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 font-medium">Admins</p>
                                <p className="text-2xl font-bold text-gray-800">{adminUsers}</p>
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
                                placeholder="Search users..."
                            />
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        fillRule="evenodd"
                                        d="M8 4a4 4 0 100 8a4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                        </div>

                        {/* Status filter */}
                        <div className="min-w-[150px]">
                            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                                <option value="All">All Status</option>
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                                <option value="Banned">Banned</option>
                            </select>
                        </div>

                        {/* Role filter */}
                        <div className="min-w-[150px]">
                            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                                <option value="All">All Roles</option>
                                <option value="User">User</option>
                                <option value="Admin">Admin</option>
                                <option value="Content Manager">Content Manager</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Users table */}
                <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6 flex flex-col h-full">
                    {/* Table header with bulk actions */}
                    <div className="border-b border-gray-200 bg-gray-50 px-4 py-3 flex items-center z-10">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            />
                        </div>
                        <div className="ml-auto text-sm text-gray-500">{users.length} users found</div>
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
                                        User
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Status
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Role
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Last Login
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
                                {users.map((user) => (
                                    <tr key={user.id} className="hover:bg-gray-50">
                                        <td className="px-4 py-3 whitespace-nowrap">
                                            <input
                                                type="checkbox"
                                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                            />
                                        </td>
                                        <td className="px-4 py-3 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 h-10 w-10">
                                                    <img
                                                        className="h-10 w-10 rounded-full object-cover"
                                                        src={user.avatar}
                                                        alt={user.name}
                                                    />
                                                </div>
                                                <div className="ml-4">
                                                    <div className="text-sm font-medium text-gray-900">{user.name}</div>
                                                    <div className="text-sm text-gray-500">{user.email}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3 whitespace-nowrap">
                                            <span
                                                className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                                                ${
                                                    user.status === 'Active'
                                                        ? 'bg-green-100 text-green-800'
                                                        : user.status === 'Inactive'
                                                          ? 'bg-yellow-100 text-yellow-800'
                                                          : 'bg-red-100 text-red-800'
                                                }`}
                                            >
                                                {user.status}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                                            {user.role}
                                        </td>
                                        <td className="px-4 py-3 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{formatDate(user.lastLogin)}</div>
                                            <div className="text-xs text-gray-500">{getTimeSince(user.lastLogin)}</div>
                                        </td>
                                        <td className="px-4 py-3 whitespace-nowrap text-right text-sm font-medium">
                                            <div className="flex justify-end space-x-2">
                                                <button className="text-blue-600 hover:text-blue-900">Edit</button>
                                                {user.status !== 'Banned' ? (
                                                    <button className="text-red-600 hover:text-red-900">Ban</button>
                                                ) : (
                                                    <button className="text-green-600 hover:text-green-900">
                                                        Activate
                                                    </button>
                                                )}
                                                <button className="text-gray-600 hover:text-gray-900">Delete</button>
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
                                    <span className="font-medium">{Math.min(8, users.length)}</span> of{' '}
                                    <span className="font-medium">{users.length}</span> results
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

                                    {users.length > 8 && (
                                        <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                                            2
                                        </button>
                                    )}

                                    <button
                                        className={`relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium ${users.length <= 8 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:bg-gray-50'}`}
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

export default UserManagement;
