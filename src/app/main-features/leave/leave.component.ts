import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LeaveService } from '../../services/leave.service';
import { MatTabsModule } from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-leave',
  standalone: true,
  imports: [CommonModule, RouterLink, MatTabsModule, MatTableModule],
  templateUrl: './leave.component.html',
  styleUrl: './leave.component.scss',
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
  displayedColumns: string[] = ['id', 'EIT_id', 'type', 'date', 'status'];
  dataSource = this.leaves;
}
