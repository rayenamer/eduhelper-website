import { Component } from '@angular/core';

@Component({
  selector: 'app-why-choose-us',
  imports: [],
  templateUrl: './why-choose-us.component.html',
  styleUrl: './why-choose-us.component.css'
})
export class WhyChooseUsComponent {

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
