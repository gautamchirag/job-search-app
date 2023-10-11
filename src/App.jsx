import './App.css';
import Header from './components/header/Header';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Errorcomponent from './components/errorhandling/Errorcomponent';
import ProtectedRoutes from './components/utils/ProtectedRoutes';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Header />,
      errorElement: <Errorcomponent />,
      children: [
        {
          path: '/login',
          element: <Login />,
        },
        {
          path: '/mainpage',
          element: <ProtectedRoutes page={'mainpage'}></ProtectedRoutes>,
        },
        {
          path: '/register',
          element: <Register />,
        },
        {
          path: '/jobdetail',
          element: <ProtectedRoutes page={'jobdetail'}></ProtectedRoutes>,
        },
        {
          path: '/applyform',
          element: <ProtectedRoutes page={'applyform'}></ProtectedRoutes>,
        },
        {
          path: '/preview',
          element: <ProtectedRoutes page={'preview'}></ProtectedRoutes>,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
