import { Component } from '@angular/core';
import { skills } from '../../../constants';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html'
})
export class SkillsComponent {
  skills = skills;
}
