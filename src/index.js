import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { PageNotFound } from './components/error/PageNotFound';
import { Content } from './components/content/Content';
import { Login } from './components/login_register/Login';
import { Register } from './components/login_register/Register';
import { Contact } from './components/pages/Contact'

/*routing*/
import {
    BrowserRouter,
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <PageNotFound />,
        children: [
            {
                path: "/home",
                element: <Content />
            },
            {
                path: "/upload",
                element: <PageNotFound />
            },
            {
                path: "/rules",
                element: <PageNotFound />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/about_us",
                element: <PageNotFound />
            }
        ]
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    }
])

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router = {router} basename="/home"/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
