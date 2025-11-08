import { Component } from '@angular/core';
import { projects } from '../../../constants';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html'
})
export class ProjectsComponent {
  projects = projects;
}
