import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    
    console.log('🛡️ AuthGuard - Verificando acceso a:', state.url);
    
    if (this.loginService.isLoggedIn()) {
      console.log('✅ AuthGuard - Usuario autenticado, permitiendo acceso');
      return true;
    } else {
      console.log('❌ AuthGuard - Usuario no autenticado, redirigiendo a login');
      this.router.navigate(['/login'], { 
        queryParams: { returnUrl: state.url } 
      });
      return false;
    }
  }
}
