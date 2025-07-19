import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'sistema-examenes-frontend';

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    // Inicializar el estado de autenticación al cargar la aplicación
    console.log('🚀 App - Inicializando aplicación');
    
    // Restaurar sesión si existe
    setTimeout(() => {
      this.loginService.restoreSession();
      
      console.log('🔍 App - Estado de login después de restaurar:', this.loginService.isLoggedIn());
      
      if (this.loginService.isLoggedIn()) {
        const user = this.loginService.getUser();
        console.log('👤 App - Usuario en sesión:', user?.email || user?.nombre || 'Usuario desconocido');
      }
    }, 100);
  }
}
