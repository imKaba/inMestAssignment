// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-header',
//   standalone: true,
//   imports: [CommonModule, MaterialModule],
//   templateUrl: './header.component.html',
//   styleUrl: './header.component.scss'
// })
// export class HeaderComponent {

// }


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../material/material.module';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class TopNavComponent {

}