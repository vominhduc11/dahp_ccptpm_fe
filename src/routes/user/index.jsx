import { Navigate } from 'react-router-dom';
import NotFoundPage from '../../components/common/NotFoundPage';
import Container from '../../Layout/user/Container';
import HomePage from '../../pages/user/HomePage';
import MovieDetailPage from '../../pages/user/MovieDetailPage';
import WatchRoomPage from '../../pages/user/WatchRoomPage';

const UserRoute = [
    {
        path: '*',
        element: <NotFoundPage />
    },
    {
        path: '/',
        element: <Container />,
        children: [
            { index: true, element: <Navigate to="/home" replace /> },
            { path: '/home', element: <HomePage /> },
            { path: '/movie/:id', element: <MovieDetailPage /> },
            { path: '/watch-room/:id', element: <WatchRoomPage /> }
        ]
    }
];

export default UserRoute;
