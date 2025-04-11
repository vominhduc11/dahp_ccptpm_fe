import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

function Container() {
    return (
        <div className="flex flex-col h-screen overflow-hidden">
            {/* Header fixed at top */}
            <div className="flex-shrink-0">
                <Header />
            </div>

            {/* Content area - takes remaining height */}
            <div className="flex flex-1 overflow-hidden">
                {/* Sidebar - fixed height, no scroll */}
                <aside className="w-64 flex-shrink-0 bg-gray-900">
                    <Sidebar />
                </aside>

                {/* Main content - scrollable */}
                <main className="flex-1 overflow-y-auto p-4 bg-gray-100">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

export default Container;
