import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

export interface PeriodicElement {
  position: number;
  employee: string;
  id: number;
  role: string;
  type: string;
  status: string
  action: string
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, employee: 'Hydrogen', id: 1.0079, role: 'H', type: 'full-time', status: 'pending', action: 'print'},
  {position: 2, employee: 'Helium', id: 4.0026, role: 'He', type: 'full-time', status: 'pending', action: 'print'},
  {position: 3, employee: 'Lithium', id: 6.941, role: 'Li', type: 'full-time', status: 'pending', action: 'print'},
  {position: 4, employee: 'Beryllium', id: 9.0122, role: 'Be', type: 'full-time', status: 'pending', action: 'print'},
  {position: 5, employee: 'Boron', id: 10.811, role: 'B', type: 'full-time', status: 'pending', action: 'print'},
  {position: 6, employee: 'Carbon', id: 12.0107, role: 'C', type: 'full-time', status: 'pending', action: 'print'},
  {position: 7, employee: 'Nitrogen', id: 14.0067, role: 'N', type: 'full-time', status: 'pending', action: 'print'},
  {position: 8, employee: 'Oxygen', id: 15.9994, role: 'O', type: 'full-time', status: 'pending', action: 'print'},
  {position: 9, employee: 'Fluorine', id: 18.9984, role: 'F', type: 'full-time', status: 'pending', action: 'print'},
  {position: 10, employee: 'Neon', id: 20.1797, role: 'Ne', type: 'full-time', status: 'pending', action: 'print'},
];


@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatProgressSpinnerModule,MatButtonModule, MatMenuModule, MatIconModule,MatTableModule],
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.scss'
})
export class AnalyticsComponent {
  displayedColumns: string[] = ['position', 'employee', 'role', 'Id', 'type', 'status', 'action'];
  dataSource = ELEMENT_DATA;
}
