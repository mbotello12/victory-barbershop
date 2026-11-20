import { Component } from '@angular/core';
import { HeroComponent } from '../../features/hero/hero.component';
import { BarbersComponent } from '../../features/barbers/barbers.component';
import { JoinTeamComponent } from '../../features/join-team/join-team.component';


@Component({
  selector: 'app-home',
  standalone:true,
  imports: [HeroComponent, BarbersComponent, JoinTeamComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
