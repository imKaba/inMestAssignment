import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './auth/login/login.component';
import { SideNavComponent } from './_app/common/side-nav/side-nav.component';
import { MaterialModule } from './material/material.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    FormsModule, 
    LoginComponent, 
    SideNavComponent,
    MaterialModule
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnChanges, OnInit  {
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  title = 'inmest-web';
  name = "Lucky";
  profile = {
    id: 1,
    first_name: "Lucky",
    last_name: "Dogbey"
  }
  genesis = "hello";

  ngOnInit(): void {
    console.log('On Init');
  }
  constructor() {
    console.log("constructor");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes, 'changes');
    for(const inputChange in changes) {
      console.log(changes[inputChange].firstChange, inputChange);
    }
  }

  
}