import { useRoutes } from 'react-router-dom';
import UserRoute from './routes/user';
import AdminRoute from './routes/admin';
import { useAuth } from './Contexts/AuthContext';

function App() {
    const { role } = useAuth();
    let routes = useRoutes(role === 'admin' ? AdminRoute : UserRoute);

    return routes;
}

export default App;
