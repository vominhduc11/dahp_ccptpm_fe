import { useRoutes } from 'react-router-dom';
import UserRoute from './routes/user';
import AdminRoute from './routes/admin';

function App() {
    let routes = useRoutes(AdminRoute);

    return routes;
}

export default App;
