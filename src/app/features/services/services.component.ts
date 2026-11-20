import { Component } from '@angular/core';
import { SERVICES } from '../../core/data/services';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  services = SERVICES;

  bookingUrl = 'https://victorybarber.setmore.com';
}