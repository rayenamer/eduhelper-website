import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-educational-events-management',
  templateUrl: './educational-events-management.component.html',
  styleUrl: './educational-events-management.component.css'
})
export class EducationalEventsManagementComponent {
  constructor(private router: Router) {}

  goHome() {
    this.router.navigate(['/']);
  }

  goBack() {
    window.history.back();
  }
}