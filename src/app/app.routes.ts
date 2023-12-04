import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { HomeComponent } from './main-features/dashboard/dashboard.component';
import { UsersComponent } from './main-features/users/users.component';
import { AttendanceComponent } from './main-features/attendance/attendance.component';
import { AnalyticsComponent } from './main-features/analytics/analytics.component';
import { LeaveComponent } from './main-features/leave/leave.component';
import { UserDetailComponent } from './main-features/user-detail/user-detail.component';
import { LeaveDetailComponent } from './main-features/leave-detail/leave-detail.component';
import { ItSupportComponent } from './main-features/it-support/it-support.component';
import { AttendanceInnerComponent } from './main-features/attendance-inner/attendance-inner.component';


export const routes: Routes = [
    {'path': '', component: HomeComponent},
    {'path': 'first-component', component: FirstComponent},
    {'path': 'user', component: UsersComponent},
    {'path': 'user-detail', component: UserDetailComponent},
    {'path': 'calendar', component: AttendanceComponent},
    {'path': 'analytics', component: AnalyticsComponent},
    {'path': 'leave', component: LeaveComponent},
    {'path': 'leave/:id', component: LeaveDetailComponent},
    {'path': 'it-support', component: ItSupportComponent},
    {'path': 'attendance', component: AttendanceComponent},
    {'path': 'attendance/:id', component: AttendanceInnerComponent},

    
];
