import { Routes } from '@angular/router';

import {AdminDashboardComponent} from './adminDashboard/adminDashboard.component';
import {CustomerDashboardComponent} from './customerDashboard/customerDashboard.component';
import {DriverDashboardService} from '../services/driverDashboard.service';
import {DriverDashboardComponent} from './driverDashboard/driverDashboard.component';


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
      {
        path: 'customerDashboard',
        component: CustomerDashboardComponent,
        data: {
          heading: 'Book a ride'
        }
      },
      {
        path: 'driverDashboard',
        component: DriverDashboardComponent,
        data: {
          heading: 'Dashboard'
        }
      }
    ]
}];
