import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Add this import
import {
    closeModal as closeModalLogin,
    openModal as openModalLogin
} from '../../stores/slices/Layout/user/Header/isLoginModalOpenSlice';
import {
    closeModal as closeModalRegister,
    openModal as openModalRegister
} from '../../stores/slices/Layout/user/Header/isRegisterModalOpenSlice';
import {
    setUsername as setUsernameLogin,
    setPassword as setPasswordLogin
} from '../../stores/slices/Layout/user/Header/loginFormSlice';
import {
    setUsername as setUsernameRegister,
    setPassword as setPasswordRegister,
    setConfirmPassword as setConfirmPasswordRegister
} from '../../stores/slices/Layout/user/Header/registerFormSlice';
import { setError as setErrorRegister } from '../../stores/slices/Layout/user/Header/registerErrorSlice';
import { setError as setErrorLogin } from '../../stores/slices/Layout/user/Header/loginErrorSlice';
import axios from 'axios';
import { setRegisterSuccess } from '../../stores/slices/Layout/user/Header/registerSuccessSlice';

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate(); // Add this hook

    // Add state for success message
    const registerSuccess = useSelector((state) => state.registerSuccess);
    const isLoginModalOpen = useSelector((state) => state.isLoginModalOpen);
    const isRegisterModalOpen = useSelector((state) => state.isRegisterModalOpen);
    const loginForm = useSelector((state) => state.loginForm);
    const registerForm = useSelector((state) => state.registerForm);
    const loginError = useSelector((state) => state.loginError);
    const registerError = useSelector((state) => state.registerError);
    // Assuming user is logged in for the demo
    const isAuthenticated = false;
    const currentUser = {
        name: 'John Doe',
        email: 'john@example.com',
        avatar: 'https://via.placeholder.com/40',
        role: 'Admin'
    };

    // Static state values for UI display
    const isScrolled = true;
    const isMobileMenuOpen = false;
    const isUserMenuOpen = false;

    const handleSubmitLogin = (event) => {
        event.preventDefault();
        // Add your form submission logic here
        if (loginForm.username === '' || loginForm.password === '') {
            dispatch(setErrorLogin('Vui lòng nhập đầy đủ thông tin'));
            return;
        } else if (!/^[a-zA-Z0-9_]+$/.test(loginForm.username)) {
            dispatch(setErrorLogin('Username không hợp lệ'));
            return;
        } else if (loginForm.password.length < 8) {
            dispatch(setErrorLogin('Password tối thiểu 8 ký tự'));
            return;
        } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(loginForm.password)) {
            dispatch(
                setErrorLogin('Mật khẩu phải chứa ít nhất một chữ hoa, một chữ thường, một số và một ký tự đặc biệt')
            );
            return;
        } else {
            dispatch(setErrorLogin(''));
        }
        axios
            .post(`${import.meta.env.VITE_API_URL}/auth/login`, loginForm)
            .then((response) => {
                console.log('login successful:', response.data);
                // Store tokens in localStorage
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('refreshToken', response.data.refreshToken);

                // Close login modal
                dispatch(closeModalLogin());

                // Redirect to home page
                navigate('/');
            })
            .catch((error) => {
                dispatch(setErrorLogin(error.response.data.error));
            });
    };

    const handleSubmitRegister = (event) => {
        event.preventDefault();
        // Add your registration form submission logic here
        if (registerForm.username === '' || registerForm.password === '' || registerForm.confirmPassword === '') {
            dispatch(setErrorRegister('Vui lòng nhập đầy đủ thông tin'));
            return;
        } else if (!/^[a-zA-Z0-9_]+$/.test(registerForm.username)) {
            dispatch(setErrorRegister('Username không hợp lệ'));
            return;
        } else if (registerForm.password.length < 8) {
            dispatch(setErrorRegister('Password tối thiểu 8 ký tự'));
            return;
        } else if (
            !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(registerForm.password)
        ) {
            dispatch(
                setErrorRegister('Mật khẩu phải chứa ít nhất một chữ hoa, một chữ thường, một số và một ký tự đặc biệt')
            );
            return;
        } else if (registerForm.password !== registerForm.confirmPassword) {
            dispatch(setErrorRegister('Mật khẩu không khớp'));
            return;
        } else {
            dispatch(setErrorRegister(''));
        }
        axios
            .post(`${import.meta.env.VITE_API_URL}/auth/register`, registerForm)
            .then((response) => {
                console.log('Registration successful:', response.data);
                // Set success state
                dispatch(setRegisterSuccess());

                // Clear the register form
                dispatch(setUsernameRegister(''));
                dispatch(setPasswordRegister(''));
                dispatch(setConfirmPasswordRegister(''));

                // Show success message for 2 seconds, then switch to login modal
                setTimeout(() => {
                    setRegisterSuccess(false);
                    dispatch(closeModalRegister());
                    dispatch(openModalLogin());
                }, 2000);
            })
            .catch((error) => {
                dispatch(setErrorRegister(error.response.data.error));
            });
    };

    return (
        <>
            <header
                className={`fixed top-0 w-full z-50 transition-all duration-500 ${
                    isScrolled ? 'bg-gray-900 shadow-lg' : 'bg-gradient-to-b from-black/80 to-transparent'
                }`}
            >
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between py-4">
                        {/* Logo */}
                        <div className="flex items-center space-x-2">
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
                            <span className="text-xl font-bold text-white">MovieStream</span>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center space-x-8">
                            <a href="#" className="text-white hover:text-red-500 transition-colors duration-300">
                                Trang chủ
                            </a>
                            <a href="#" className="text-white hover:text-red-500 transition-colors duration-300">
                                Phim lẻ
                            </a>
                            <a href="#" className="text-white hover:text-red-500 transition-colors duration-300">
                                Phim bộ
                            </a>
                            <a href="#" className="text-white hover:text-red-500 transition-colors duration-300">
                                Phòng chiếu
                            </a>
                            {isAuthenticated && currentUser?.role === 'Admin' && (
                                <a href="#" className="text-white hover:text-red-500 transition-colors duration-300">
                                    Quản trị
                                </a>
                            )}
                        </nav>

                        {/* Right section: search & user */}
                        <div className="flex items-center space-x-4">
                            {/* Search button */}
                            <button className="text-white hover:text-red-500 transition-colors duration-300">
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </button>

                            {/* User Menu - Authenticated */}
                            {isAuthenticated ? (
                                <div className="relative">
                                    <button className="flex items-center">
                                        <div className="relative">
                                            <img
                                                src={currentUser?.avatar || 'https://via.placeholder.com/40'}
                                                alt="User avatar"
                                                className="w-8 h-8 rounded-full object-cover border-2 border-transparent hover:border-red-500 transition-all duration-300"
                                            />
                                            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border border-white"></span>
                                        </div>
                                    </button>

                                    {/* User Dropdown Menu (hidden in static version) */}
                                    {isUserMenuOpen && (
                                        <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 z-50 animate-fadeIn">
                                            <div className="px-4 py-2 border-b border-gray-700">
                                                <p className="text-sm font-medium text-white truncate">
                                                    {currentUser?.name}
                                                </p>
                                                <p className="text-xs text-gray-400 truncate">{currentUser?.email}</p>
                                            </div>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700 hover:text-white"
                                            >
                                                Dashboard
                                            </a>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700 hover:text-white"
                                            >
                                                Thông tin cá nhân
                                            </a>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700 hover:text-white"
                                            >
                                                Phim yêu thích
                                            </a>
                                            {currentUser?.role === 'Admin' && (
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700 hover:text-white"
                                                >
                                                    Quản trị hệ thống
                                                </a>
                                            )}
                                            <button className="block w-full text-left px-4 py-2 text-sm text-gray-200 hover:bg-gray-700 hover:text-white border-t border-gray-700">
                                                Đăng xuất
                                            </button>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                /* User Menu - Not Authenticated */
                                <div className="flex items-center space-x-2">
                                    <button
                                        onClick={() => dispatch(openModalLogin())}
                                        className="login-open-button text-white hover:text-red-500 transition-colors duration-300 text-sm"
                                    >
                                        Đăng nhập
                                    </button>
                                    <span className="text-gray-500">|</span>
                                    <button
                                        onClick={() => dispatch(openModalRegister())}
                                        className="register-open-button text-white hover:text-red-500 transition-colors duration-300 text-sm"
                                    >
                                        Đăng ký
                                    </button>
                                </div>
                            )}

                            {/* Mobile menu button */}
                            <button className="md:hidden text-white hover:text-red-500 transition-colors duration-300">
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    {isMobileMenuOpen ? (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    ) : (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Mobile Navigation Menu (hidden in static version) */}
                    {isMobileMenuOpen && (
                        <nav className="md:hidden py-4 border-t border-gray-700 animate-fadeIn">
                            <div className="flex flex-col space-y-4">
                                <a href="#" className="text-white hover:text-red-500 transition-colors duration-300">
                                    Trang chủ
                                </a>
                                <a href="#" className="text-white hover:text-red-500 transition-colors duration-300">
                                    Phim lẻ
                                </a>
                                <a href="#" className="text-white hover:text-red-500 transition-colors duration-300">
                                    Phim bộ
                                </a>
                                <a href="#" className="text-white hover:text-red-500 transition-colors duration-300">
                                    Phòng chiếu
                                </a>

                                {/* Special section for mobile menu */}
                                {isAuthenticated ? (
                                    <>
                                        <div className="pt-2 border-t border-gray-700">
                                            <a
                                                href="#"
                                                className="text-white hover:text-red-500 transition-colors duration-300"
                                            >
                                                Dashboard
                                            </a>
                                        </div>
                                        <a
                                            href="#"
                                            className="text-white hover:text-red-500 transition-colors duration-300"
                                        >
                                            Thông tin cá nhân
                                        </a>
                                        <a
                                            href="#"
                                            className="text-white hover:text-red-500 transition-colors duration-300"
                                        >
                                            Phim yêu thích
                                        </a>
                                        {currentUser?.role === 'Admin' && (
                                            <a
                                                href="#"
                                                className="text-white hover:text-red-500 transition-colors duration-300"
                                            >
                                                Quản trị hệ thống
                                            </a>
                                        )}
                                        <button className="text-left text-white hover:text-red-500 transition-colors duration-300">
                                            Đăng xuất
                                        </button>
                                    </>
                                ) : (
                                    <div className="pt-2 border-t border-gray-700 flex flex-col space-y-4">
                                        <button className="text-left text-white hover:text-red-500 transition-colors duration-300">
                                            Đăng nhập
                                        </button>
                                        <button className="text-left text-white hover:text-red-500 transition-colors duration-300">
                                            Đăng ký
                                        </button>
                                    </div>
                                )}
                            </div>
                        </nav>
                    )}
                </div>
            </header>

            {/* Login Modal */}
            {isLoginModalOpen && (
                <div className="fixed inset-0 z-50 overflow-auto flex items-center justify-center px-4 backdrop-blur-sm animate-fadeIn">
                    <div className="absolute inset-0 bg-black bg-opacity-60 animate-opacityIn"></div>
                    <div className="bg-gray-900 text-white rounded-lg shadow-lg max-w-md w-full mx-auto overflow-hidden relative animate-slideInUp">
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-xl font-bold">Đăng nhập</h3>
                                <button
                                    onClick={() => dispatch(closeModalLogin())}
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </button>
                            </div>

                            {/* Error Message Display Area */}
                            {loginError !== '' && (
                                <div className="mb-4 p-3 bg-red-900/50 border border-red-500 rounded-md text-sm text-red-200">
                                    <div className="flex items-center">
                                        <svg
                                            className="w-5 h-5 mr-2 text-red-500 flex-shrink-0"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span>{loginError}</span>
                                    </div>
                                </div>
                            )}

                            <form onSubmit={handleSubmitLogin}>
                                <div className="mb-4">
                                    <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-1">
                                        Username
                                    </label>
                                    <input
                                        onChange={(e) => dispatch(setUsernameLogin(e.currentTarget.value))}
                                        type="text"
                                        id="username"
                                        className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                                        placeholder="username"
                                    />
                                </div>

                                <div className="mb-4">
                                    <div className="flex justify-between items-center mb-1">
                                        <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                                            Mật khẩu
                                        </label>
                                        <a href="#" className="text-xs text-red-500 hover:text-red-400">
                                            Quên mật khẩu?
                                        </a>
                                    </div>
                                    <input
                                        onChange={(e) => dispatch(setPasswordLogin(e.currentTarget.value))}
                                        type="password"
                                        id="password"
                                        className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                                        placeholder="••••••••"
                                    />
                                </div>

                                <div className="flex items-center mb-6">
                                    <input
                                        type="checkbox"
                                        id="remember-me"
                                        className="w-4 h-4 text-red-600 bg-gray-800 border-gray-700 rounded focus:ring-red-500"
                                    />
                                    <label htmlFor="remember-me" className="ml-2 text-sm text-gray-300">
                                        Ghi nhớ đăng nhập
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                                >
                                    Đăng nhập
                                </button>
                            </form>

                            <div className="mt-6 text-center">
                                <p className="text-sm text-gray-400">
                                    Chưa có tài khoản?{' '}
                                    <button
                                        onClick={() => {
                                            dispatch(closeModalLogin()), dispatch(openModalRegister());
                                        }}
                                        className="text-red-500 hover:text-red-400 font-medium"
                                    >
                                        Đăng ký ngay
                                    </button>
                                </p>
                            </div>

                            <div className="mt-6">
                                <div className="relative">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-gray-700"></div>
                                    </div>
                                    <div className="relative flex justify-center text-sm">
                                        <span className="px-2 bg-gray-900 text-gray-400">Hoặc đăng nhập với</span>
                                    </div>
                                </div>

                                <div className="mt-6 grid grid-cols-2 gap-3">
                                    <button
                                        type="button"
                                        className="w-full inline-flex justify-center py-2 px-4 border border-gray-700 rounded-md shadow-sm bg-gray-800 text-sm font-medium text-white hover:bg-gray-700"
                                    >
                                        <svg
                                            className="w-5 h-5 mr-2"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            aria-hidden="true"
                                        >
                                            <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                        </svg>
                                        Twitter
                                    </button>

                                    <button
                                        type="button"
                                        className="w-full inline-flex justify-center py-2 px-4 border border-gray-700 rounded-md shadow-sm bg-gray-800 text-sm font-medium text-white hover:bg-gray-700"
                                    >
                                        <svg
                                            className="w-5 h-5 mr-2"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        GitHub
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Register Modal */}
            {isRegisterModalOpen && (
                <div className="fixed inset-0 z-50 overflow-auto flex items-center justify-center px-4 backdrop-blur-sm animate-fadeIn">
                    <div className="absolute inset-0 bg-black bg-opacity-60 animate-opacityIn"></div>
                    <div className="bg-gray-900 text-white rounded-lg shadow-lg max-w-md w-full mx-auto overflow-hidden relative animate-slideInUp">
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-xl font-bold">Đăng ký tài khoản</h3>
                                <button
                                    onClick={() => dispatch(closeModalRegister())}
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </button>
                            </div>

                            {/* Success Message Display Area */}
                            {registerSuccess && (
                                <div className="mb-4 p-3 bg-green-900/50 border border-green-500 rounded-md text-sm text-green-200">
                                    <div className="flex items-center">
                                        <svg
                                            className="w-5 h-5 mr-2 text-green-500 flex-shrink-0"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span>Đăng ký tài khoản thành công! Đang chuyển đến trang đăng nhập...</span>
                                    </div>
                                </div>
                            )}

                            {/* Error Message Display Area */}
                            {!registerSuccess && registerError !== '' && (
                                <div className="mb-4 p-3 bg-red-900/50 border border-red-500 rounded-md text-sm text-red-200">
                                    <div className="flex items-center">
                                        <svg
                                            className="w-5 h-5 mr-2 text-red-500 flex-shrink-0"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span>{registerError}</span>
                                    </div>
                                </div>
                            )}

                            <form onSubmit={handleSubmitRegister}>
                                <div className="mb-4">
                                    <label
                                        htmlFor="register-username"
                                        className="block text-sm font-medium text-gray-300 mb-1"
                                    >
                                        Username
                                    </label>
                                    <input
                                        onChange={(e) => dispatch(setUsernameRegister(e.currentTarget.value))}
                                        type="text"
                                        id="register-username"
                                        className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                                        placeholder="username"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label
                                        htmlFor="register-password"
                                        className="block text-sm font-medium text-gray-300 mb-1"
                                    >
                                        Mật khẩu
                                    </label>
                                    <input
                                        onChange={(e) => dispatch(setPasswordRegister(e.currentTarget.value))}
                                        type="password"
                                        id="register-password"
                                        className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                                        placeholder="••••••••"
                                    />
                                </div>

                                <div className="mb-6">
                                    <label
                                        htmlFor="confirm-password"
                                        className="block text-sm font-medium text-gray-300 mb-1"
                                    >
                                        Xác nhận mật khẩu
                                    </label>
                                    <input
                                        onChange={(e) => dispatch(setConfirmPasswordRegister(e.currentTarget.value))}
                                        type="password"
                                        id="confirm-password"
                                        className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                                        placeholder="••••••••"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                                >
                                    Đăng ký
                                </button>
                            </form>

                            <div className="mt-6 text-center">
                                <p className="text-sm text-gray-400">
                                    Đã có tài khoản?{' '}
                                    <button
                                        onClick={() => {
                                            dispatch(openModalLogin()), dispatch(closeModalRegister());
                                        }}
                                        className="text-red-500 hover:text-red-400 font-medium"
                                    >
                                        Đăng nhập
                                    </button>
                                </p>
                            </div>

                            <div className="mt-6">
                                <div className="relative">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-gray-700"></div>
                                    </div>
                                    <div className="relative flex justify-center text-sm">
                                        <span className="px-2 bg-gray-900 text-gray-400">Hoặc đăng ký với</span>
                                    </div>
                                </div>

                                <div className="mt-6 grid grid-cols-2 gap-3">
                                    <button
                                        type="button"
                                        className="w-full inline-flex justify-center py-2 px-4 border border-gray-700 rounded-md shadow-sm bg-gray-800 text-sm font-medium text-white hover:bg-gray-700"
                                    >
                                        <svg
                                            className="w-5 h-5 mr-2"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            aria-hidden="true"
                                        >
                                            <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                        </svg>
                                        Twitter
                                    </button>

                                    <button
                                        type="button"
                                        className="w-full inline-flex justify-center py-2 px-4 border border-gray-700 rounded-md shadow-sm bg-gray-800 text-sm font-medium text-white hover:bg-gray-700"
                                    >
                                        <svg
                                            className="w-5 h-5 mr-2"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        GitHub
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;
