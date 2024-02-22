import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home';
import LayoutPublic from '../layout/LayoutPublic';
import Detail from '../pages/Detail'

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
          }
        ]
        },

]);

export default router;