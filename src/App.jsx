
import './App.scss';
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
  Outlet,
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Whatschat from './components/Whatsaap/Whatsc';
import { lazy } from 'react';
const  Home = lazy(() => import("./pages/Home/Home"));
const  Product = lazy(() => import("./pages/Product/Product"));
const  Products = lazy(() => import("./pages/Products/Products"));
const  About = lazy(() => import('./pages/About/About'));
const Shipping = lazy(() => import('./components/Shipping/Shipping'));
const Term_of_service = lazy(() => import('./components/Term/Term_of_service'));
const Cancellation = lazy(() => import('./components/Refund/Cancellation'));
const Privacy_policy = lazy(() => import('./components/Privacy_policy/Privacy_policy'));
const Support = lazy(() => import('./components/Support/Support'));
import { Suspense,  useEffect } from 'react';

import ReactGA from "react-ga4";

const ScrollToTop = () => {
  const {pathname} = useLocation();
  useEffect (() => {
    window.scrollTo(0, 0);
  }, [pathname])
  return null;
};

const Layout = () =>{
  return (
    <div className="app">
      <Navbar/>
      <ScrollToTop/>
      <Whatschat/>
      <Outlet/>
      <Footer/>
    </div>
  )
};

const TRACKING_ID =( import.meta.env.VITE_API_ANALYTICS);
ReactGA.initialize(TRACKING_ID);
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {
        path: "/",
        element: ( <Suspense fallback={<div className='center'>loading...</div>}>
          <Home />
        </Suspense> )
      },
      {
        path: "About",
        element: ( <Suspense fallback={<div className='center'>loading...</div>}>
        <About />
      </Suspense> ) 
      },
      {
        path:"/product/:id",
        element: ( <Suspense fallback={<div className='center'>loading...</div>}>
        <Product />
      </Suspense> ) 
       },
       {
        path:"/products/:id",
        element: ( <Suspense fallback={<div className='center'>loading...</div>}>
       <Products />
      </Suspense> ) 
       },

       {
        path:"Shipping",
        element: ( <Suspense fallback={<div className='center'>loading...</div>}>
       <Shipping />
      </Suspense> ) 
       },

       {
        path:"Term_of_service",
        element: ( <Suspense fallback={<div className='center'>loading...</div>}>
       <Term_of_service/>
      </Suspense> ) 
       },
       {
        path:"Cancellation",
        element: ( <Suspense fallback={<div className='center'>loading...</div>}>
       <Cancellation/>
      </Suspense> ) 
       },
       {
        path:"Privacy_policy",
        element: ( <Suspense fallback={<div className='center'>loading...</div>}>
       <Privacy_policy/>
      </Suspense> ) 
       },
       {
        path:"Support",
        element: ( <Suspense fallback={<div className='center'>loading...</div>}>
       <Support/>
      </Suspense> ) 
       },

    ],
  },
  
]);

function App() {
  return (
    <div>
    <RouterProvider router={router} />
    </div>
  );
};

export default App;



// G-MSDJ3CRJFX