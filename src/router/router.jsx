import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home';
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
        ]
        },
]);

export default router;