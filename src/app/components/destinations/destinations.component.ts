import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-destinations',
  imports: [],
  templateUrl: './destinations.component.html',
  styleUrl: './destinations.component.css'
})
export class DestinationsComponent {

  constructor(private router: Router) {}

  navigateToService(serviceRoute: string) {
    this.router.navigate(['/service', serviceRoute]);
  }

  scrollCards(section: string, direction: 'left' | 'right') {
    const cardsContainer = document.getElementById(`${section}-cards`);
    if (cardsContainer) {
      const scrollAmount = 350; // Adjust based on card width + gap
      const currentScroll = cardsContainer.scrollLeft;
      
      if (direction === 'left') {
        cardsContainer.scrollTo({
          left: currentScroll - scrollAmount,
          behavior: 'smooth'
        });
      } else {
        cardsContainer.scrollTo({
          left: currentScroll + scrollAmount,
          behavior: 'smooth'
        });
      }
    }
  }
}
