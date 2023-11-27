import { Routes } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { NewDetailsComponent } from './view/new-details/new-details.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'news/:id',
    component: NewDetailsComponent,
  },
];
