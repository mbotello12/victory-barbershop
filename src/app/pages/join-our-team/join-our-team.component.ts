import { Component } from '@angular/core';
import { SeoService } from '../../core/seo.service';

@Component({
  selector: 'app-join-our-team',
  standalone: true,
  imports: [],
  templateUrl: './join-our-team.component.html',
  styleUrl: './join-our-team.component.scss'
})
export class JoinOurTeamComponent {
  constructor(private seo: SeoService) {
    this.seo.updatePage(
      'Barber Opportunities in Victoria, TX | Victory Barbershop',
      'Looking for your next opportunity as a barber in Victoria, TX? Join the team at Victory Barbershop. Learn more about our shop and submit an inquiry today.',
      '/join-our-team'
    );
  }
}