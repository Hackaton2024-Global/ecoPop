import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home';
import Gallery from "../pages/Gallery";
import LayoutPublic from '../layout/LayoutPublic';

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
            path: "/gallery",
            element: <Gallery />
          }
        ]
        },
]);

export default router;