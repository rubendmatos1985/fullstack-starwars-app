import * as React from 'react';
import { RouteConfig } from 'react-router-config';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';

const routes:RouteConfig[] = [
    {
        path: '/home',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/contact',
        component: Contact
    }
]


export default routes;
