import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 py-16">
            {/* 404 Content */}
            <div className="max-w-lg w-full text-center">
                {/* 404 Graphic */}
                <div className="mb-8">
                    <h1 className="text-9xl font-extrabold text-blue-600 tracking-widest">404</h1>
                    <div className="bg-blue-600 px-2 text-sm rounded rotate-12 absolute">Trang không tồn tại</div>
                </div>

                {/* Message */}
                <div className="mb-10">
                    <h2 className="text-2xl font-medium text-gray-800 mb-3">
                        Oops! Trang bạn tìm kiếm không được tìm thấy
                    </h2>
                    <p className="text-gray-600">
                        Có vẻ như trang bạn đang tìm kiếm không tồn tại, đã bị di chuyển hoặc không khả dụng. Đừng lo
                        lắng, bạn có thể quay lại trang chủ hoặc kiểm tra lại đường dẫn.
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                    <Link
                        to="/"
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium shadow-md hover:bg-blue-700 transition-colors duration-200 w-full sm:w-auto"
                    >
                        Quay lại trang chủ
                    </Link>

                    <Link
                        to="/movies"
                        className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200 w-full sm:w-auto"
                    >
                        Xem danh sách phim
                    </Link>
                </div>

                {/* Helpful Links (Optional) */}
                <div className="mt-12">
                    <p className="text-sm text-gray-500 mb-2">Hoặc bạn có thể thử một trong những liên kết dưới đây:</p>
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                        <Link to="/login" className="text-sm text-blue-600 hover:underline">
                            Đăng nhập
                        </Link>
                        <Link to="/register" className="text-sm text-blue-600 hover:underline">
                            Đăng ký
                        </Link>
                        <Link to="/dashboard" className="text-sm text-blue-600 hover:underline">
                            Bảng điều khiển
                        </Link>
                        <Link to="/contact" className="text-sm text-blue-600 hover:underline">
                            Liên hệ hỗ trợ
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;
