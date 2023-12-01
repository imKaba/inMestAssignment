import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { LeaveService } from '../../services/leave.service';

@Component({
  selector: 'app-leave-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './leave-detail.component.html',
  styleUrl: './leave-detail.component.scss'
})
export class LeaveDetailComponent implements OnInit {
  leave_id = '';
  created_by = '';
  leave: any;

  constructor(
    private route: ActivatedRoute,
    private leaveService: LeaveService
  ){}

  ngOnInit(): void {
      this.route.params.subscribe(param => {
        console.log(param);
        this.leave_id = param['id'];
        this.created_by = param['name'];
        console.log(this.created_by);
        console.log(this.leave_id);
        this.getMyLeaveById(parseInt(this.leave_id));
      });

      
  }

  getMyLeaveById(id: number){
    this.leaveService.getLeaveByID(id).subscribe((response => {
      this.leave = response;
    }));
  }



}