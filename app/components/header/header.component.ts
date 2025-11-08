import { Component, HostListener } from '@angular/core';

interface NavLink {
  id: string;
  title: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  navLinks: NavLink[] = [
    { id: 'home', title: 'Home' },
    { id: 'about', title: 'About' },
    { id: 'skills', title: 'Skills' },
    { id: 'projects', title: 'Projects' },
    { id: 'experience', title: 'Experience' },
    { id: 'contact', title: 'Contact' },
  ];

  isScrolled = false;
  activeSection = 'home';
  isMenuOpen = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 10;
    
    let currentSection = 'home';
    this.navLinks.forEach(link => {
      const element = document.getElementById(link.id);
      if (element) {
        const sectionTop = element.offsetTop;
        if (window.scrollY >= sectionTop - 100) {
          currentSection = element.id;
        }
      }
    });
    this.activeSection = currentSection;
  }

  scrollToSection(id: string, event: Event): void {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    this.isMenuOpen = false;
  }
}
