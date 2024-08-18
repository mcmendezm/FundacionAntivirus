import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  toggleSearch(): void {
    const searchInput = document.getElementById('search-input');
    const registerButton = document.getElementById('btn-register');
    const loginButton = document.getElementById('btn-login');

    if (searchInput && registerButton && loginButton) {
      if (searchInput.classList.contains('hidden')) {
        searchInput.classList.remove('hidden');
        searchInput.classList.add('visible');
        registerButton.classList.add('hidden');
        loginButton.classList.add('hidden');
      } else {
        searchInput.classList.remove('visible');
        searchInput.classList.add('hidden');
        registerButton.classList.remove('hidden');
        loginButton.classList.remove('hidden');
      }
    }
  }

  toggleDropdown(): void {
    const dropdown = document.getElementById('dropdown');
    if (dropdown) {
      dropdown.classList.toggle('visible');
    }
  }

  openModal(): void {
    const modal = document.getElementById('menu-modal');
    if (modal) {
      modal.classList.remove('hidden');
      modal.classList.add('visible');
    }
  }

  closeModal(): void {
    const modal = document.getElementById('menu-modal');
    if (modal) {
      modal.classList.remove('visible');
      modal.classList.add('hidden');
    }
  }
}
