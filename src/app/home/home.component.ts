
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
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
}
