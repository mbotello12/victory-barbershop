import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',

    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/home/home.component')
        .then(m => m.HomeComponent)
  },
  {
    path: 'services',
    loadComponent: () =>
      import('./pages/services/services.component')
        .then(m => m.ServicesComponent)
  },
  {
    path: 'our-barbers',
    loadComponent: () =>
      import('./pages/our-barbers/our-barbers.component')
        .then(m => m.OurBarbersComponent)
  },
  {
    path: 'join-our-team',
    loadComponent: () =>
      import('./pages/join-our-team/join-our-team.component')
        .then(m => m.JoinOurTeamComponent)
  },
  {
    path: "**",
    redirectTo: ''
  }
];