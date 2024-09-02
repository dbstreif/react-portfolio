import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Projects from './Projects.jsx'
import Resume from './Resume.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/projects",
        element: <Projects/>,
    },
    {
        path: "/resume",
        element: <Resume/>,
    },
    {
        path: "*",
        element: <App/>
    },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <RouterProvider router={router}/>
  </StrictMode>,
)
