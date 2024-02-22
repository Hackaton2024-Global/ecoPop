import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home';
import Gallery from "../pages/Gallery";
import LayoutPublic from '../layout/LayoutPublic';
import SignUp from '../pages/SignUp';
import Access from '../pages/Access';

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
            path: '/signup',
            element: <SignUp />,
          }, 
          {
            path: '/access',
            element: <Access />,
          },
          { 
            path: "/gallery",
            element: <Gallery />
          },
        ]
    }
]);

export default router;