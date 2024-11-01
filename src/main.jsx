import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Componnets/Root/Root';
import ErrorPage from './Componnets/ErrorPage/ErrorPage';
import Home from './Componnets/Home/Home';
import Dashboard from './Componnets/DashBoard/Dashboard';
import BooksDetails from './Componnets/BooksDetails/BooksDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children :[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/DashBoard",
        element:<Dashboard></Dashboard>
      },
      {
        path:"books/:bookId",
        element:<BooksDetails></BooksDetails>,
        loader: () => fetch('../public/data/booksData.json')
        
      }

    ]
    
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
