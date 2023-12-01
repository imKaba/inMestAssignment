import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { __param } from 'tslib';


@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})

export class UserDetailComponent implements OnInit{
  userID = '';
  constructor(private route: ActivatedRoute){}
  ngOnInit(): void {
      this.route.queryParams.subscribe(param => {
        console.log(param, 'query param');
        this.userID = param["id"];

      });
  }

}
