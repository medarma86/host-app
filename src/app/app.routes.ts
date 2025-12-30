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
    // This fetches the entire Profile feature folder from the Remote
    loadChildren: () => 
      loadRemoteModule('remote-app', './profile-feature')
        .then(m => m.PROFILE_ROUTES)
  }
];
