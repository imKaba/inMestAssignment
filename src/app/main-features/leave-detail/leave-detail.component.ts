// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { ActivatedRoute, RouterModule } from '@angular/router';
// import { LeaveService } from '../../services/leave.service';

// @Component({
//   selector: 'app-leave-detail',
//   standalone: true,
//   imports: [CommonModule, RouterModule],
//   templateUrl: './leave-detail.component.html',
//   styleUrl: './leave-detail.component.scss'
// })
// export class LeaveDetailComponent implements OnInit {
//   leave_id = '';
//   leave: any;

//   constructor(
//     private route: ActivatedRoute,
//     private leaveService: LeaveService
//   ){}

//   ngOnInit(): void {
//       this.route.params.subscribe(param => {
//         this.leave_id = param['id'];
//         this.getMyLeaveById(parseInt(this.leave_id));
//       });

      
//   }

//   getMyLeaveById(id: number){
//     this.leaveService.getLeaveByID(id).subscribe((response => {
//       this.leave = response;
//       console.log(this.leave);
//     }));
//   }
// }

// leave-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { LeaveService } from '../../services/leave.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MaterialModule } from '../../material/material.module';

@Component({
  selector: 'app-leave-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatButtonModule, MaterialModule],
  templateUrl: './leave-detail.component.html',
  styleUrls: ['./leave-detail.component.scss']
})
export class LeaveDetailComponent implements OnInit {
  leaveId = '';
  leave: any;

  constructor(
    private route: ActivatedRoute,
    private leaveService: LeaveService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.leaveId = param["id"];
      this.getMyLeaveById(parseInt(this.leaveId));
    });
  }

  getMyLeaveById(id: number) {
    this.leaveService.getLeaveByID(id).subscribe(resp => {
      this.leave = resp;
    });
  }

  // Define your methods with correct syntax
  returnToLeaves(): void {
    // Implement return logic
    console.log('Return to Leaves clicked');
    alert('Return to Leaves clicked');
  }

  acceptRequest(): void {
    // Implement accept logic
    console.log('Accept request clicked');
    alert('Accept request clicked');
  }

  declineRequest(): void {
    // Implement decline logic
    console.log('Decline request clicked');
    alert('Decline request clicked');
  }
}