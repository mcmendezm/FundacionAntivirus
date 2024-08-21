import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-social-login',
  templateUrl: './social-login.component.html',
  styleUrls: ['./social-login.component.css']
})
export class SocialLoginComponent {

  constructor(public authService: AuthService) {}

  // Método para iniciar sesión con Google
  signInWithGoogle() {
    this.authService.signInWithGoogle();
  }

  // Método para iniciar sesión con Facebook
  signInWithFacebook() {
    this.authService.signInWithFacebook();
  }

  // Método para cerrar sesión
  signOut() {
    this.authService.signOut();
  }
}
