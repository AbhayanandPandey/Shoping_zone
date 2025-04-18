  import './App.css';
  import Index from './components/Home/Index.jsx';
  import ProductCard from './components/products/product.jsx';
  import{ RouterProvider, createBrowserRouter } from 'react-router-dom';
  import Login from './components/login/Login.jsx';
  import Signup from './components/Signup/Signup.jsx';
  import Navbar from './components/Home/navbarlogin.jsx';
  function App() {
    const router = createBrowserRouter([
      {
        path: '/',
        element: <Index />,
      },
      {
        path: '/Login',
        element: <Login />,
      },
      {
        path: '/Signup',
        element: <Signup />,
      },
      {
        path: '/product',
        element: <ProductCard 
        title="Redmi Note 13"
        image="./data/images/product1/img1.jpg"
        gallery={["./data/images/product1/img1.jpg","./data/images/product1/img2.jpg", "./data/images/product1/img3.jpg","./data/images/product1/img4.jpg", "./data/images/product1/img5.jpg","./data/images/product1/img6.jpg","./data/images/product1/img7.jpg", "./data/images/product1/img8.jpg","./data/images/product1/img9.jpg"]}
        price={12999}
        originalPrice={14999}
        discount={15}
        offers={["10% off with SBI cards", "₹500 off on first purchase"]}
        rating={4.4}
        reviewCount={1200}
        specs={["6.67-inch AMOLED", "5000mAh battery", "Snapdragon 695"]}
        warranty="1 Year Manufacturer Warranty"
        />,
      },
    ])
    return (
      <div className="App">
        <RouterProvider router={router}></RouterProvider>
      </div>
    );
  }

  export default App;
