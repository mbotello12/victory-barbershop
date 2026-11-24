import { Component } from '@angular/core';
import { HeroComponent } from '../../features/hero/hero.component';
import { BarbersComponent } from '../../features/barbers/barbers.component';
import { JoinTeamComponent } from '../../features/join-team/join-team.component';
import { SeoService } from '../../core/seo.service';


@Component({
  selector: 'app-home',
  standalone:true,
  imports: [HeroComponent, BarbersComponent, JoinTeamComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private seo: SeoService) {
    this.seo.updatePage(
      'Victory Barbershop | Barbershop in Victoria, TX',
      'Looking for a barbershop in Victoria, TX? Victory Barbershop offers professional haircuts, skin fades, beard grooming, and straight razor shaves. Book your appointment today.',
      '/'
    );
  }
}
