import { Component } from '@angular/core';
import { socialLinks } from '../../../constants';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  socialLinks = socialLinks;
}
