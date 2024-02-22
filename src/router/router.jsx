import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home';
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
          }
        ]
        },
]);

export default router;