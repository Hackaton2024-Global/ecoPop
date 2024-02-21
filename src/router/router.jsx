import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home';
import LayoutPublic from '../layout/LayoutPublic';
import CardDetail from "../components/CardDetail";

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
            path: "/detail",
            element: <CardDetail/>
          }
        ]
        },

]);

export default router;