import activeUsers from '../../../../Data/activeUsers';
import chatMessages from '../../../../Data/chatMessages';

// Static ChatComponent
const ChatComponent = () => {
    return (
        <div className="w-full lg:w-1/4 bg-gray-900 h-full flex flex-col border-l border-gray-800">
            {/* Tabs for Chat and Users */}
            <div className="bg-gray-800 px-4 py-3 flex text-sm font-medium">
                <button className="flex-1 py-2 border-b-2 border-red-600 text-center text-white">Chat</button>
                <button className="flex-1 py-2 border-b-2 border-transparent text-center text-gray-400 hover:text-white">
                    Users ({activeUsers.filter((u) => u.isActive).length})
                </button>
            </div>

            {/* Chat messages container */}
            <div className="flex-grow overflow-y-auto p-4 space-y-3">
                {chatMessages.map((msg) => (
                    <div key={msg.id} className={`flex ${msg.userId === 0 ? 'justify-center' : 'space-x-3'}`}>
                        {msg.userId === 0 ? (
                            // System message
                            <div className="bg-gray-800/50 text-gray-400 text-xs py-1 px-3 rounded-full">
                                {msg.message}
                            </div>
                        ) : (
                            <>
                                {/* User avatar */}
                                <div className="flex-shrink-0">
                                    <img
                                        src={`https://via.placeholder.com/40?text=${msg.userName.charAt(0)}`}
                                        alt={msg.userName}
                                        className="w-8 h-8 rounded-full"
                                    />
                                </div>

                                {/* Message content */}
                                <div className="flex-grow">
                                    <div className="flex items-baseline space-x-2">
                                        <span className="font-medium text-sm">
                                            {msg.userName}
                                            {msg.userId === 1 && (
                                                <span className="ml-1 text-xs font-normal text-red-500">(Admin)</span>
                                            )}
                                        </span>
                                        <span className="text-xs text-gray-500">
                                            {new Date(msg.timestamp).toLocaleTimeString([], {
                                                hour: '2-digit',
                                                minute: '2-digit'
                                            })}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-300 mt-1">{msg.message}</p>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>

            {/* Message input */}
            <div className="p-3 border-t border-gray-800">
                <form className="flex space-x-2">
                    <input
                        type="text"
                        className="w-full bg-gray-800 text-white rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
                        placeholder="Type a message..."
                        value=""
                    />
                    <button
                        type="submit"
                        className="bg-red-600 hover:bg-red-700 text-white rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </form>
            </div>

            {/* Active users list - hidden by default */}
            <div className="hidden flex-grow overflow-y-auto p-4 space-y-2">
                {activeUsers.map((user) => (
                    <div key={user.id} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-800">
                        <div className="relative">
                            <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full" />
                            {user.isActive && (
                                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-900"></div>
                            )}
                        </div>
                        <div className="flex-grow">
                            <div className="flex items-center">
                                <span className="font-medium">{user.name}</span>
                                {user.isAdmin && (
                                    <span className="ml-2 text-xs bg-red-600/20 text-red-500 px-2 py-0.5 rounded-full">
                                        Admin
                                    </span>
                                )}
                            </div>
                            <p className="text-xs text-gray-400">{user.isActive ? 'Online' : 'Offline'}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChatComponent;
