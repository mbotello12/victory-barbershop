
import { Component } from '@angular/core';
import { BARBERS } from '../../core/data/barbers';
import { SeoService } from '../../core/seo.service';

@Component({
  selector: 'app-our-barbers',
  standalone: true,
  imports: [],
  templateUrl: './our-barbers.component.html',
  styleUrl: './our-barbers.component.scss'
})
export class OurBarbersComponent {
  barbers = BARBERS;
  constructor(private seo: SeoService){
    this.seo.updatePage(
      'Meet Our Barbers | Victory Barbershop in Victoria, TX',
      'Meet the experienced barbers at Victory Barbershop in Victoria, TX. Explore their specialties, learn about their experience, and book directly with your preferred barber.',
      '/our-barbers'
    );
  }
}