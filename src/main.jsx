import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PageNotFound } from './components/error/PageNotFound';
import { Content } from './components/content/Content';
import { Login } from './components/login_register/Login';
import { Register } from './components/login_register/Register';
import { Contact } from './pages/Contact';
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { AuthProvider } from './context/AuthContext';
import EventDetails from './components/event/EventDetails';
import { EventProvider } from './context/EventContext';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <PageNotFound />,
        children: [
            {
                path: "/event",
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
            },
            {
                path: "/event/:id",
                element: <EventDetails />
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
        <AuthProvider>
            <EventProvider>
                <RouterProvider router = {router} basename="/home"/>
            </EventProvider>
        </AuthProvider>
    </React.StrictMode>
);

serviceWorkerRegistration.register();
