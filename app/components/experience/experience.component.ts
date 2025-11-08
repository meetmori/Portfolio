import { Component } from '@angular/core';
import { experience } from '../../../constants';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html'
})
export class ExperienceComponent {
  experience = experience;
}
