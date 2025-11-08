import { Component } from '@angular/core';
import { services, stats } from '../../../constants';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent {
  services = services;
  stats = stats;
}
