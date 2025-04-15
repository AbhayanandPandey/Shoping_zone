import './App.css';
import Signup from './components/Signup/Signup.jsx';
import Login from './components/login/Login.jsx';
import Index from './components/Home/Index.jsx';
import{ RouterProvider, createBrowserRouter } from 'react-router-dom';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Index />,
    },
    {
      path: '/Signup',
      element: <Signup />,
    },
    {
      path: '/login',
      element: <Login />,
    },
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
