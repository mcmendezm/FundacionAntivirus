import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template: `
    <app-navbar></app-navbar>
    <app-footer></app-footer>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-anti';
  constructor(private router: Router) {}

  navigateToSection(section: string) {
    this.router.navigate([], { fragment: section });
  }
}
