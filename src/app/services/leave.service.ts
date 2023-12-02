import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {
  private leavesDB = [
    {
        "id": 1,
        "EIT_id": "john.doe@meltwater.org",
        "type": "Sick Leave",
        "date": "2023-09-15",
        "status": "Pending"
    },
    {
        "id": 2,
        "EIT_id": "jane.smith@meltwater.org",
        "type": "Property",
        "date": "2023-10-20",
        "status": "Accepted"
    },
    {
        "id": 3,
        "EIT_id": "peter.johnson@meltwater.org",
        "type": "Sick Leave",
        "date": "2023-11-05",
        "status": "Declined"
    },
    {
        "id": 4,
        "EIT_id": "emily.brown@meltwater.org",
        "type": "Property",
        "date": "2023-08-10",
        "status": "Accepted"
    },
    {
        "id": 5,
        "EIT_id": "olivia.jackson@meltwater.org",
        "type": "Property",
        "date": "2023-12-02",
        "status": "Pending"
    },
    {
        "id": 6,
        "EIT_id": "william.anderson@meltwater.org",
        "type": "Sick Leave",
        "date": "2023-11-20",
        "status": "Accepted"
    },
    {
        "id": 7,
        "EIT_id": "sophia.miller@meltwater.org",
        "type": "Property",
        "date": "2023-09-30",
        "status": "Declined"
    },
    {
        "id": 8,
        "EIT_id": "daniel.wilson@meltwater.org",
        "type": "Sick Leave",
        "date": "2023-10-12",
        "status": "Pending"
    },
    {
        "id": 9,
        "EIT_id": "olivia.rodriguez@meltwater.org",
        "type": "Property",
        "date": "2023-11-28",
        "status": "Accepted"
    },
    {
        "id": 10,
        "EIT_id": "lucas.garcia@meltwater.org",
        "type": "Sick Leave",
        "date": "2023-12-01",
        "status": "Declined"
    },
    {
        "id": 10,
        "EIT_id": "michael.martinez@meltwater.org",
        "type": "Property",
        "date": "2023-12-15",
        "status": "Pending"
    },
    {
        "id": 11,
        "EIT_id": "sophie.thomas@meltwater.org",
        "type": "Sick Leave",
        "date": "2023-11-25",
        "status": "Accepted"
    },
    {
        "id": 12,
        "EIT_id": "gabriel.peterson@meltwater.org",
        "type": "Property",
        "date": "2023-10-18",
        "status": "Declined"
    },
    {
        "id": 13,
        "EIT_id": "oliver.hernandez@meltwater.org",
        "type": "Sick Leave",
        "date": "2023-09-20",
        "status": "Pending"
    }
  ]

  constructor() { }

  getLeaves() {
    return of(this.leavesDB)
  }
  
  getLeaveByID(id:number){
    return of(this.leavesDB.find(element => element.id === id));
  }
}
