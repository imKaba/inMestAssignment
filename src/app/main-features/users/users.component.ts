import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  current_cohort = '2024';

  users = [
    {userID:1, firstname:'Maha', lastname: 'Kaba', email:'mahakaba@gmail.com', cohort:this.current_cohort},
    {userID:2, firstname:'Maha' + Math.round(Math.random() * 100), lastname: 'Kaba'+ Math.round(Math.random() * 100), email:'mahakaba@gmail.com', cohort:this.current_cohort},
    {userID:3, firstname:'Maha' + Math.round(Math.random()*100), lastname: 'Kaba'+ Math.round(Math.random()*100), email:'mahakaba@gmail.com', cohort:this.current_cohort},
    {userID:4, firstname:'Maha' + Math.round(Math.random()*100), lastname: 'Kaba'+ Math.round(Math.random()*100), email:'mahakaba@gmail.com', cohort:this.current_cohort},
    {userID:5, firstname:'Maha' + Math.round(Math.random()*100), lastname: 'Kaba'+ Math.round(Math.random()*100), email:'mahakaba@gmail.com', cohort:this.current_cohort},
    {userID:6, firstname:'Maha' + Math.round(Math.random()*100), lastname: 'Kaba'+ Math.round(Math.random()*100), email:'mahakaba@gmail.com', cohort:this.current_cohort},
    {userID:7, firstname:'Maha' + Math.round(Math.random()*100), lastname: 'Kaba'+ Math.round(Math.random()*100), email:'mahakaba@gmail.com', cohort:this.current_cohort},
    {userID:8, firstname:'Maha' + Math.round(Math.random()*100), lastname: 'Kaba'+ Math.round(Math.random()*100), email:'mahakaba@gmail.com', cohort:this.current_cohort},
    {userID:9, firstname:'Maha' + Math.round(Math.random()*100), lastname: 'Kaba'+ Math.round(Math.random()*100), email:'mahakaba@gmail.com', cohort:this.current_cohort},
    {userID:10, firstname:'Maha'+ Math.round(Math.random()*100), lastname: 'Kaba'+ Math.round(Math.random()*100), email:'mahakaba@gmail.com', cohort:this.current_cohort},
    {userID:11, firstname:'Maha'+ Math.round(Math.random()*100), lastname: 'Kaba'+ Math.round(Math.random()*100), email:'mahakaba@gmail.com', cohort:this.current_cohort},
    {userID:12, firstname:'Maha'+ Math.round(Math.random()*100), lastname: 'Kaba'+ Math.round(Math.random()*100), email:'mahakaba@gmail.com', cohort:this.current_cohort},
    {userID:13, firstname:'Maha'+ Math.round(Math.random()*100), lastname: 'Kaba'+ Math.round(Math.random()*100), email:'mahakaba@gmail.com', cohort:this.current_cohort},
  ];

  
}
