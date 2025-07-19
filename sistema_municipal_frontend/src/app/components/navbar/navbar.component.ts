import { LoginService } from './../../services/login.service';
import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  isLoggedIn = false;
  user: any = null;
  private authSubscription: Subscription = new Subscription();

  constructor(
    public login: LoginService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.updateAuthStatus();
    
    // Suscribirse a cambios en el estado de autenticación con mejor manejo
    this.authSubscription = this.login.loginStatusSubjec.asObservable().subscribe(
      (isAuthenticated: boolean) => {
        console.log('🔄 Navbar - Estado de autenticación cambió:', isAuthenticated);
        this.updateAuthStatus();
        // Forzar detección de cambios
        this.cdr.detectChanges();
      }
    );
  }

  ngOnDestroy(): void {
    // Limpiar suscripción para evitar memory leaks
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }

  private updateAuthStatus(): void {
    const wasLoggedIn = this.isLoggedIn;
    const previousUser = this.user;
    
    this.isLoggedIn = this.login.isLoggedIn();
    this.user = this.login.getUser();
    
    // Log para debugging
    if (wasLoggedIn !== this.isLoggedIn) {
      console.log('🔄 Navbar - Estado de login cambió:', { 
        antes: wasLoggedIn, 
        ahora: this.isLoggedIn,
        usuario: this.user?.nombre || this.user?.username
      });
    }
    
    // Si el estado cambió, forzar detección de cambios
    if (wasLoggedIn !== this.isLoggedIn || JSON.stringify(previousUser) !== JSON.stringify(this.user)) {
      this.cdr.markForCheck();
    }
  }

  public logout(): void {
    this.login.logout();
    window.location.reload();
  }

  // Obtener el rol del usuario actual
  public getUserRole(): string {
    if (this.user && this.user.authorities && this.user.authorities.length > 0) {
      return this.user.authorities[0].authority;
    }
    return '';
  }

  // Obtener las iniciales del usuario para el avatar
  public getUserInitials(): string {
    if (!this.user) return '';
    
    const name = this.user.nombre || this.user.username || '';
    return name.split(' ')
      .map((word: string) => word.charAt(0))
      .join('')
      .toUpperCase()
      .substring(0, 2);
  }

  // Verificar si el usuario es administrador
  public isAdmin(): boolean {
    return this.getUserRole() === 'ADMIN';
  }

  // Verificar si el usuario es trabajador
  public isTrabajador(): boolean {
    return this.getUserRole() === 'TRABAJADOR';
  }

  // Verificar si el usuario es usuario regular
  public isUsuario(): boolean {
    return this.getUserRole() === 'USUARIO';
  }

  // Verificar si el usuario puede gestionar contenido
  public canManageContent(): boolean {
    const role = this.getUserRole();
    return role === 'ADMIN' || role === 'TRABAJADOR';
  }

  // Método para forzar actualización manual (útil para debugging)
  public forceUpdateAuthStatus(): void {
    console.log('🔄 Navbar - Forzando actualización de estado');
    this.updateAuthStatus();
    this.cdr.detectChanges();
  }

}
