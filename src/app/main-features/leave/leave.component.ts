import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LeaveService } from '../../services/leave.service';

@Component({
  selector: 'app-leave',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './leave.component.html',
  styleUrl: './leave.component.scss'
})

export class LeaveComponent implements OnInit {
  leaves: any[] = [];

  constructor(
    private leaveService: LeaveService
  ){}

  getLeaves() {
    this.leaveService.getLeaves().subscribe((response:any) => {
      this.leaves = response;
    })
  }

  ngOnInit(): void {
      this.getLeaves();
  }
}
