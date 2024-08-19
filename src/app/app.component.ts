import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';

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
export class AppComponent implements OnInit {
  title = 'angular-anti';

  constructor(private router: Router) {}

  ngOnInit(): void {
    initFlowbite();
}

  navigateToSection(section: string) {
    this.router.navigate([], { fragment: section });
  }
}