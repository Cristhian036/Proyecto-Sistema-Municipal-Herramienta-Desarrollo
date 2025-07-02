import { LoginService } from './login.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

  // Endpoints que no requieren autenticación
  private readonly publicEndpoints = [
    '/generate-token',
    '/usuarios/',
    '/uploads/',
    '/noticias/imagen/'
  ];

  constructor(private loginService: LoginService, private router: Router) {}

  private isPublicEndpoint(url: string): boolean {
    return this.publicEndpoints.some(endpoint => url.includes(endpoint));
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req;
    
    console.log('🔍 Interceptor - URL:', req.url);
    console.log('🔍 Interceptor - Method:', req.method);
    
    // Si es un endpoint público O es un GET a noticias (solo lectura), no agregar token
    if (this.isPublicEndpoint(req.url) || 
        (req.method === 'GET' && req.url.includes('/noticias'))) {
      console.log('🔍 Interceptor - Endpoint público o GET a noticias, sin token');
      return next.handle(authReq);
    }
    
    const token = this.loginService.getToken();
    console.log('🔍 Interceptor - Token obtenido:', token ? `${token.substring(0, 20)}...` : 'null');
    console.log('🔍 Interceptor - isLoggedIn:', this.loginService.isLoggedIn());
    console.log('🔍 Interceptor - localStorage direct:', localStorage.getItem('token') ? 'exists' : 'null');
    
    if (token != null && token.trim() !== '') {
      // Asegurar que el token esté limpio (sin Bearer previo)
      const cleanToken = token.replace(/^Bearer\s+/, '').trim();
      
      // Preparar headers básicos
      const headers: { [key: string]: string } = {
        Authorization: `Bearer ${cleanToken}`
      };
      
      // Solo agregar Content-Type si no es FormData (para requests con archivos)
      if (!(req.body instanceof FormData)) {
        headers['Content-Type'] = 'application/json';
      }
      
      authReq = authReq.clone({
        setHeaders: headers
      });
      
      console.log('✅ Interceptor - Headers agregados');
      console.log('✅ Interceptor - Authorization header:', `Bearer ${cleanToken.substring(0, 20)}...`);
      console.log('✅ Interceptor - Token length:', cleanToken.length);
      console.log('✅ Interceptor - Request body type:', req.body?.constructor?.name || 'null');
      
      // Verificar headers finales
      const authHeader = authReq.headers.get('Authorization');
      console.log('✅ Interceptor - Header final confirmado:', authHeader ? authHeader.substring(0, 30) + '...' : 'NO HEADER');
    } else {
      console.log('❌ Interceptor - No hay token disponible');
      console.log('❌ Interceptor - localStorage token:', localStorage.getItem('token'));
      console.log('❌ Interceptor - Token service result:', token);
    }
    
    return next.handle(authReq).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('❌ HTTP Error:', error);
        
        if (error.status === 401 || error.status === 403) {
          console.log('❌ Error de autenticación, cerrando sesión');
          this.loginService.logout();
          this.router.navigate(['/login']);
        }
        
        return throwError(error);
      })
    );
  }
}

export const authInterceptorProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }
];
