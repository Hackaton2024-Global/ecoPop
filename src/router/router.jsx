import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home';
import Gallery from "../pages/Gallery";
import LayoutPublic from '../layout/LayoutPublic';
import Detail from '../pages/Detail'
import SignUp from '../pages/SignUp';
import Access from '../pages/Access';
import Contact from "../pages/Contact";
import NewProduct from "../components/NewProduct";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutPublic />,
        children: [
          {
            index: true,
            element: <Home />, 
          },
          {
            path: "/detail/:id",
            element: <Detail/>
          },
          {
            path: '/signup',
            element: <SignUp />,
          }, 
          {
            path: '/access',
            element: <Access />,
          },
          {
            path: '/contact',
            element: <Contact />,
          },
          { 
            path: "/gallery",
            element: <Gallery />
          },
          {
            path: "/product",
            element: <NewProduct /> 
          }
        ]
    }
]);

export default router;