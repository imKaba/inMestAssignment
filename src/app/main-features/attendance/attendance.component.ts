// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-attendance',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './attendance.component.html',
//   styleUrl: './attendance.component.scss'
// })
// export class AttendanceComponent {

// }

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttendanceService } from '../../services/attendance.service';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-attendance',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule],
  templateUrl: './attendance.component.html',
  styleUrl: './attendance.component.scss'
})
export class AttendanceComponent implements OnInit{
  attendance : any[]  = [];
   constructor(
    private attendanceService: AttendanceService
  ){
    
  }
  ngOnInit(): void {
    this.getAttendance()
    console.log(this.attendance)
  }

  getAttendance(){
    this.attendanceService.getAttendance().subscribe((resp:any)=>{
       this.attendance = resp
    })
  }
}