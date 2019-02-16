import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {CommonModule, DatePipe} from '@angular/common';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {FormatService} from '../services/format.service';
import {AdminRoutes} from './admin.routing';
import {UserService} from '../services/user.service';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ScreenCheckGuard} from '../guards/screen_check.guard';
import {EditorModule} from '@tinymce/tinymce-angular';
import {AdminDashboardComponent} from './adminDashboard/adminDashboard.component';
import {AdminDashboardService} from '../services/adminDashboard.service';
import {CustomerDashboardComponent} from './customerDashboard/customerDashboard.component';
import {CustomerDashboardService} from '../services/customerDashboard.service';
import {DriverDashboardComponent} from './driverDashboard/driverDashboard.component';
import {DriverDashboardService} from '../services/driverDashboard.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminRoutes),
    NgxChartsModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    EditorModule
  ],
  declarations: [
    AdminDashboardComponent,
    CustomerDashboardComponent,
    DriverDashboardComponent
  ],
  providers: [
    FormatService,
    UserService,
    DatePipe,
    ScreenCheckGuard,
    AdminDashboardService,
    CustomerDashboardService,
    DriverDashboardService
  ]
})

export class AdminModule {}
