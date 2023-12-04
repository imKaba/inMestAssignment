import { Component, OnInit } from '@angular/core';
import { AttendanceService } from '../../services/attendance.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MaterialModule } from '../../material/material.module';
import { NgApexchartsModule } from 'ng-apexcharts';


@Component({
  selector: 'app-attendance-inner',
  standalone: true,
  imports: [MatIconModule, CommonModule, MaterialModule, MatCardModule, NgApexchartsModule, RouterLink],
  templateUrl: './attendance-inner.component.html',
  styleUrl: './attendance-inner.component.scss'
})
export class AttendanceInnerComponent implements OnInit {
  attendanceInner: any = {};
  id: number = 0;
  constructor(private route: ActivatedRoute, private attendanceInnerService: AttendanceService) {}
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = parseInt(params['id']);
    })
    this.getAttendanceInner(this.id);
  }

  getAttendanceInner(id:number) {
    this.attendanceInnerService.getSingleAttendance(id).subscribe((resp: any) => {
      this.attendanceInner = resp;
    });

  }
  public series: any[] = [{
    name: 'Request',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 68, 78, 23]
  }, {
    name: 'Attendance',
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 100, 92, 88]
  }];

  public chart: any = {
    type: 'bar',
    height: 350
  };
   
  public title: any = {
    text: 'Basic Column Chart',
    align: 'left'
  };

}