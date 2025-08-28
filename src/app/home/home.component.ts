
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet, Router } from '@angular/router';
import { HeroComponent } from '../components/hero/hero.component';
import { StatisticsComponent } from '../components/statistics/statistics.component';
import { ServicesComponent } from '../components/services/services.component';
import { DestinationsComponent } from '../components/destinations/destinations.component';
import { WhyChooseUsComponent } from '../components/why-choose-us/why-choose-us.component';
import { TestimonialsComponent } from '../components/testimonials/testimonials.component';
import { CtaComponent } from '../components/cta/cta.component';

@Component({
    selector: 'app-home',
    imports: [
        RouterOutlet, 
        RouterModule,
        HeroComponent,
        StatisticsComponent,
        ServicesComponent,
        DestinationsComponent,
        WhyChooseUsComponent,
        TestimonialsComponent,
        CtaComponent
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
