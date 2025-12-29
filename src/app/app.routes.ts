import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';
import { Home } from './home/home';

export const routes: Routes = [
  {
    path: '', 
    component: Home, // This will show when you click "Home"
    pathMatch: 'full'
  },
    {
    path: 'profile',
    loadComponent: () => 
      loadRemoteModule('remote-app', './ProfileView').then(m => m.ProfileView)
  }
];
