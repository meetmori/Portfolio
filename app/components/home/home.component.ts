import { Component } from '@angular/core';
import { profile, heroSkills } from '../../../constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  profile = profile;
  heroSkills = heroSkills;
}
