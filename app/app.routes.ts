import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CoursesComponent} from "./courses.component";
import {AuthorsComponent} from "./authors.component";

const routes: Routes = [
    {path: '', redirectTo: '/courses', pathMatch: 'full'},
    {path: 'courses', component: CoursesComponent},
    {path: 'authors', component: AuthorsComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);