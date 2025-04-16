import './App.css';
import Index from './components/Home/Index.jsx';
import{ RouterProvider, createBrowserRouter } from 'react-router-dom';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Index />,
    },
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
