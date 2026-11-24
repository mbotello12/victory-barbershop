import { Component } from '@angular/core';
import { SeoService } from '../../core/seo.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  constructor(private seo: SeoService) {
    this.seo.updatePage(
      'Barber Services in Victoria, TX | Victory Barbershop',
      'Explore professional barber services at Victory Barbershop in Victoria, TX, including precision haircuts, skin fades, straight razor shaves, and beard grooming.',
      '/services'
    );
  }
}
