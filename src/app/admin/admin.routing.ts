import { Routes } from '@angular/router';

import {AdminDashboardComponent} from './adminDashboard/adminDashboard.component';


export const AdminRoutes: Routes = [
  {
    path: '',
    children: [{ path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full'
    },
      {
        path: 'adminDashboard',
        component: AdminDashboardComponent,
        data: {
          heading: 'Dashboard'
        }
      },
    ]
}];
