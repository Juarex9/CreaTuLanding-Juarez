import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import MainLayout from '../layouts/MainLayout';
import Item from '../pages/Item';
import Category from '../pages/Category';
import NotFound from '../pages/NotFound';

const routes = [
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: '/',
                element: <Home/>, 
            },
            {
                path: '/item/:ProductId',
                element: <Item/>
            },
            {
                path: '/category/:categoryId',
                element: <Category/>
            },
            {
                path: "*",
                element: <NotFound/>
            },
        ]
    },
    {
        path: '/login',
        element: <>Login</>
    },
];


export const router = createBrowserRouter(routes);