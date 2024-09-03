import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Projects from './Projects.jsx'
import Resume from './Resume.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
    {
        path: "/react-portfolio/",
        element: <App/>,
    },
    {
        path: "/react-portfolio/projects",
        element: <Projects/>,
    },
    {
        path: "/react-portfolio/resume",
        element: <Resume/>,
    },
    {
        path: "/react-portfolio/*",
        element: <App/>
    },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <RouterProvider router={router}/>
  </StrictMode>,
)
