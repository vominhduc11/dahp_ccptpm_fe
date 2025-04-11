import { Navigate } from 'react-router-dom';
import NotFoundPage from '../../components/common/NotFoundPage';
import Container from '../../Layout/admin/Container';
import Dashboard from '../../pages/admin/Dashboard';
import MovieManagement from '../../pages/admin/MovieManagement';
import RoomControlPage from '../../pages/admin/RoomControlPage';
import UserManagement from '../../pages/admin/UserManagement';

const AdminRoute = [
    {
        path: '*',
        element: <NotFoundPage />
    },
    {
        path: '/',
        element: <Container />,
        children: [
            { index: true, element: <Navigate to="/Dashboard" replace /> },
            { path: '/Dashboard', element: <Dashboard /> },
            { path: '/MovieManagement', element: <MovieManagement /> },
            { path: '/RoomControlPage', element: <RoomControlPage /> },
            { path: '/UserManagement', element: <UserManagement /> }
        ]
    }
];

export default AdminRoute;
