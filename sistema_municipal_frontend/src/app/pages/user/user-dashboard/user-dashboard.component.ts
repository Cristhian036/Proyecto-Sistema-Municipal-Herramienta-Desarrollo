import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  user: any = null;
  isLoggedIn: boolean = false;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log('📊 UserDashboard - Inicializando dashboard de usuario');
    
    // Verificar si el usuario está autenticado
    this.isLoggedIn = this.loginService.isLoggedIn();
    
    if (this.isLoggedIn) {
      this.user = this.loginService.getUser();
      console.log('👤 UserDashboard - Usuario cargado:', this.user?.email);
    } else {
      console.log('❌ UserDashboard - Usuario no autenticado, redirigiendo');
      this.router.navigate(['/login']);
    }

    // Suscribirse a cambios en el estado de autenticación
    this.loginService.loginStatusSubjec.subscribe(status => {
      this.isLoggedIn = status;
      if (status) {
        this.user = this.loginService.getUser();
      } else {
        this.user = null;
        this.router.navigate(['/login']);
      }
    });
  }

  logout(): void {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }
}
