import { Routes } from '@angular/router';
import { Main } from './main/main';
import { Projects } from './projects/projects';
import { AboutUs } from './about-us/about-us';
import { Contact } from './contact/contact';
import { Wwd } from './about-us/wwd/wwd';
import { Om } from './about-us/om/om';
import { Goals } from './about-us/goals/goals';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/main', // Перенаправляет на /main
        pathMatch: 'full'
    },
    {
        path: 'main', // Новая точка входа
        component: Main
    },
    {
        path:"projects",
        component: Projects
    },
    {
        path:"about",
        component: AboutUs
    },
    {
        path:"about/wwd",
        component: Wwd
    },
    {
        path:"about/om",
        component: Om
    },
    {
        path:"about/goals",
        component: Goals
    },
    {
        path:"contact",
        component: Contact
    }
];
