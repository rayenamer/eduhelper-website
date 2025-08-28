
import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
    selector: 'app-home',
    imports: [
        RouterModule
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {
    // Home component now uses child components
    // All functionality has been moved to respective components

    constructor(private router: Router) {}

    navigateToService(serviceType: string) {
        this.router.navigate(['/services-detail', serviceType]);
    }

    scrollCards(section: string, direction: string) {
        const container = document.getElementById(`${section}-cards`);
        if (container) {
            const scrollAmount = 300;
            if (direction === 'left') {
                container.scrollLeft -= scrollAmount;
            } else {
                container.scrollLeft += scrollAmount;
            }
        }
    }
}
