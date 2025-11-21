import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Userpage from "./components/main/User_page.tsx";
import App from './App.tsx'
import NotFoundPage from "./components/main/NotFoundPage.tsx";
import Login from './components/Login-register/Login.tsx';
import Bell_icon from "./components/header/Bell_icon.tsx";


const router = createBrowserRouter([
    {
        path: "/User",
        element: <Userpage />,
    },
    {
      path: "/",
      element: <App />,
    },
    {
      path: "*",
      element: <NotFoundPage/>,
    },
    {
      path: "/Login",
        element:<Login />,
    },
    {
      path:"/Notification",
      element:<Bell_icon />,
    },
]);

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
)
