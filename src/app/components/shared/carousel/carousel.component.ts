import { Component, AfterViewInit } from '@angular/core';
import { FlowbiteService } from '../../../services/flowbite.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements AfterViewInit {

  constructor(private flowbiteService: FlowbiteService) {}

  ngAfterViewInit(): void {
    this.flowbiteService.loadFlowbite(flowbite => {
      const carousels = document.querySelectorAll('.carousel');
      carousels.forEach((carousel) => {
        if (flowbite && typeof flowbite.Carousel === 'function') {
          new flowbite.Carousel(carousel);
        } else {
          console.error('Flowbite Carousel is not available.');
        }
      });
    });
  }
}