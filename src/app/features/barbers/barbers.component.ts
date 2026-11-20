import { Component } from '@angular/core';
import { BARBERS } from '../../core/data/barbers';

@Component({
  selector: 'app-barbers',
  standalone: true,
  imports: [],
  templateUrl: './barbers.component.html',
  styleUrl: './barbers.component.scss'
})
export class BarbersComponent {
  barbers = BARBERS;
}