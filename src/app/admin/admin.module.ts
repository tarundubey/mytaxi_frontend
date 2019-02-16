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
    AdminDashboardComponent
  ],
  providers: [
    FormatService,
    UserService,
    DatePipe,
    ScreenCheckGuard,
    AdminDashboardService
  ]
})

export class AdminModule {}
