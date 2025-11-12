import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Userpage from "./components/header/User_page.tsx";
import App from './App.tsx'
import NotFoundPage from "./components/main/NotFoundPage.tsx";
import Login from './components/Login-register/Login.tsx';


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
        element:<Login />
    },
]);

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
)
