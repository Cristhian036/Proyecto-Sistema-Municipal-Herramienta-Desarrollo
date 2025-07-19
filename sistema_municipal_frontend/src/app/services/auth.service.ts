import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import baserUrl from './helper';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

export interface User {
  id: number;
  email: string;
  nombre: string;
  apellido: string;
  authorities: Array<{authority: string}>;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private readonly TOKEN_KEY = 'auth_token';
  private readonly USER_KEY = 'auth_user';
  
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(this.hasValidToken());
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();
  
  private currentUserSubject = new BehaviorSubject<User | null>(this.getUserFromStorage());
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient) {
    // Verificar token al inicializar
    this.checkTokenValidity();
  }

  private hasValidToken(): boolean {
    const token = localStorage.getItem(this.TOKEN_KEY);
    if (!token) return false;
    
    try {
      // Verificar si el token no está expirado
      const payload = JSON.parse(atob(token.split('.')[1]));
      const now = Math.floor(Date.now() / 1000);
      return payload.exp > now;
    } catch (error) {
      console.error('Error verificando token:', error);
      return false;
    }
  }

  private getUserFromStorage(): User | null {
    const userStr = localStorage.getItem(this.USER_KEY);
    if (userStr) {
      try {
        return JSON.parse(userStr);
      } catch (error) {
        console.error('Error parsing user from storage:', error);
        return null;
      }
    }
    return null;
  }

  private checkTokenValidity(): void {
    if (!this.hasValidToken()) {
      this.logout();
    }
  }

  login(credentials: LoginRequest): Observable<LoginResponse> {
    console.log('🔐 AuthService - Intentando login para:', credentials.email);
    
    return this.http.post<LoginResponse>(`${baserUrl}/generate-token`, credentials)
      .pipe(
        tap(response => {
          if (response && response.token) {
            this.setToken(response.token);
            console.log('✅ AuthService - Token guardado exitosamente');
          }
        })
      );
  }

  getCurrentUser(): Observable<User> {
    console.log('👤 AuthService - Obteniendo usuario actual');
    
    return this.http.get<User>(`${baserUrl}/actual-usuario`)
      .pipe(
        tap(user => {
          this.setUser(user);
          console.log('✅ AuthService - Usuario cargado:', user.email);
        })
      );
  }

  private setToken(token: string): void {
    // Limpiar token de cualquier prefijo Bearer existente
    const cleanToken = token.replace(/^Bearer\s+/, '').trim();
    localStorage.setItem(this.TOKEN_KEY, cleanToken);
    this.isAuthenticatedSubject.next(true);
  }

  private setUser(user: User): void {
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
    this.currentUserSubject.next(user);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  getUser(): User | null {
    return this.currentUserSubject.value;
  }

  getUserRole(): string | null {
    const user = this.getUser();
    if (user && user.authorities && user.authorities.length > 0) {
      return user.authorities[0].authority;
    }
    return null;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticatedSubject.value && this.hasValidToken();
  }

  logout(): void {
    console.log('🚪 AuthService - Cerrando sesión');
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
    this.isAuthenticatedSubject.next(false);
    this.currentUserSubject.next(null);
  }

  // Método para compatibilidad con el código existente
  generateToken(loginData: any): Observable<any> {
    return this.login(loginData);
  }

  // Método para compatibilidad con el código existente
  loginUser(token: string): void {
    this.setToken(token);
  }

  // Método para compatibilidad con el código existente
  loginStatusSubjec = this.isAuthenticatedSubject;
}
