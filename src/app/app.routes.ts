import { Routes } from '@angular/router';
import { Main } from './main/main';
import { Projects } from './projects/projects';
import { AboutUs } from './about-us/about-us';
import { Contact } from './contact/contact';

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
        path:"contact",
        component: Contact
    }
];
