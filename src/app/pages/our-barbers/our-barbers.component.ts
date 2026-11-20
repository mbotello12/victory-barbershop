
import { Component } from '@angular/core';
import { BARBERS } from '../../core/data/barbers';

@Component({
  selector: 'app-our-barbers',
  standalone: true,
  imports: [],
  templateUrl: './our-barbers.component.html',
  styleUrl: './our-barbers.component.scss'
})
export class OurBarbersComponent {
  barbers = BARBERS;
}