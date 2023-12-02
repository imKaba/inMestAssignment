import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { DashboardComponent } from './main-features/dashboard/dashboard.component';
import { UsersComponent } from './main-features/users/users.component';
import { AttendanceComponent } from './main-features/attendance/attendance.component';
import { AnalyticsComponent } from './main-features/analytics/analytics.component';
import { LeaveComponent } from './main-features/leave/leave.component';
import { UserDetailComponent } from './main-features/user-detail/user-detail.component';
import { LeaveDetailComponent } from './main-features/leave-detail/leave-detail.component';

export const routes: Routes = [
    {'path': '', component: DashboardComponent},
    {'path': 'first-component', component: FirstComponent},
    {'path': 'user', component: UsersComponent},
    {'path': 'user-detail', component: UserDetailComponent},
    {'path': 'calendar', component: AttendanceComponent},
    {'path': 'analytics', component: AnalyticsComponent},
    {'path': 'leave', component: LeaveComponent},
    {'path': 'leave/:id/', component: LeaveDetailComponent},
    
];
