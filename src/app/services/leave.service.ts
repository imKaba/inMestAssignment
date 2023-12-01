import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {
  private leavesDB = [
    {
      id: 1,
      type: 'Vacation',
      startDate: '2023-01-01',
      endDate: '2023-01-05',
      created_by: 'John Doe',
      status: 'Approved',
      last_modified: '2023-01-05',
      status_changed_by: 'Manager1',
    },
    {
      id: 2,
      type: 'Sick Leave',
      startDate: '2023-02-10',
      endDate: '2023-02-12',
      created_by: 'Jane Smith',
      status: 'Pending',
      last_modified: '2023-02-08',
      status_changed_by: 'Supervisor1',
    },
    {
      id: 3,
      type: 'Vacation',
      startDate: '2023-03-15',
      endDate: '2023-03-20',
      created_by: 'Alice Johnson',
      status: 'Approved',
      last_modified: '2023-03-20',
      status_changed_by: 'Manager2',
    },
    { 
      id: 13, 
      type: 'Vacation', 
      startDate: '2024-01-20', 
      endDate: '2024-01-25', 
      created_by: 'Michael Brown', 
      status: 'Pending', 
      last_modified: '2024-01-18', 
      status_changed_by: 'Supervisor2' 
    },
    { 
      id: 14, 
      type: 'Personal Leave', 
      startDate: '2024-02-14', 
      endDate: '2024-02-16', 
      created_by: 'Eva Davis', 
      status: 'Approved', 
      last_modified: '2024-02-16', 
      status_changed_by: 'Manager3' 
    },
    { 
      id: 15, 
      type: 'Sick Leave', 
      startDate: '2024-03-22', 
      endDate: '2024-03-24', 
      created_by: 'Chris Wilson', 
      status: 'Pending', 
      last_modified: '2024-03-20', 
      status_changed_by: 'Supervisor3' 
    },
    { 
      id: 16, 
      type: 'Vacation', 
      startDate: '2024-04-10', 
      endDate: '2024-04-15', 
      created_by: 'Sophie Turner', 
      status: 'Approved', 
      last_modified: '2024-04-15', 
      status_changed_by: 'Manager4' 
    },
    { 
      id: 17, 
      type: 'Sick Leave', 
      startDate: '2024-05-08', 
      endDate: '2024-05-10', 
      created_by: 'Oliver White', 
      status: 'Pending', 
      last_modified: '2024-05-05', 
      status_changed_by: 'Supervisor4' 
    },
    { 
      id: 18, 
      type: 'Vacation', 
      startDate: '2024-06-15', 
      endDate: '2024-06-20', 
      created_by: 'Isabel Martinez', 
      status: 'Approved', 
      last_modified: '2024-06-20', 
      status_changed_by: 'Manager5' 
    },
    { 
      id: 19, 
      type: 'Personal Leave', 
      startDate: '2024-07-05', 
      endDate: '2024-07-08', 
      created_by: 'Lucas Brown', 
      status: 'Pending', 
      last_modified: '2024-07-03', 
      status_changed_by: 'Supervisor5' 
    },
    { 
      id: 20, 
      type: 'Sick Leave', 
      startDate: '2024-08-12', 
      endDate: '2024-08-14', 
      created_by: 'Mia Johnson', 
      status: 'Approved', 
      last_modified: '2024-08-14', 
      status_changed_by: 'Manager6' 
    },
    ]
  constructor() { }

  getLeaves() {
    return of(this.leavesDB)
  }
  
  getLeaveByID(id:number){
    return of(this.leavesDB.find(element => element.id === id));
  }
}
