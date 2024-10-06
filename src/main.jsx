import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddNew from './Components/AddNew.jsx'
import Retrieve from './Components/Retrieve.jsx'


const router = createBrowserRouter([ 
  {
    path: "/",
    element: <App />,

    children:[ 
      {
       path:"/",
       element : <AddNew />
      },
      {
        path:"/retrieve",
        element: <Retrieve />
      }
    ]
  }

]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
