import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loginStatusSubjec = new BehaviorSubject<boolean>(this.isLoggedIn());

  constructor(private http: HttpClient) { 
    // No restaurar sesión automáticamente en el constructor para evitar conflictos
    console.log('🏗️ LoginService - Constructor inicializado');
  }

  private checkAuthStatus(): void {
    const isAuthenticated = this.isLoggedIn();
    console.log('🔍 LoginService - Estado de autenticación inicial:', isAuthenticated);
    this.loginStatusSubjec.next(isAuthenticated);
  }

  //generamos el token
  public generateToken(loginData:any){
    return this.http.post(`${baserUrl}/generate-token`,loginData);
  }

  public getCurrentUser(){
    return this.http.get(`${baserUrl}/actual-usuario`);
  }

  //iniciamos sesión y establecemos el token en el localStorage
  public loginUser(token: any): boolean {
    console.log('🔍 LoginService - loginUser llamado con token:', token);
    
    // Validar que el token no esté vacío
    if (!token || token.trim() === '') {
      console.error('❌ LoginService - Token vacío o inválido');
      return false;
    }
    
    // Limpiar el token por si viene con espacios o prefijos
    let cleanToken = token.toString().trim();
    
    // Si el token ya tiene Bearer, lo removemos para guardarlo limpio
    if (cleanToken.startsWith('Bearer ')) {
      cleanToken = cleanToken.substring(7);
      console.log('🧹 LoginService - Prefijo Bearer removido');
    }
    
    console.log('� LoginService - Guardando token limpio:', cleanToken);
    
    // Guardar el token
    localStorage.setItem('token', cleanToken);
    
    // Verificar que se guardó correctamente
    const savedToken = localStorage.getItem('token');
    console.log('✅ LoginService - Token confirmado en localStorage:', savedToken);
    
    if (savedToken === cleanToken) {
      // Notificar que el usuario está autenticado
      this.loginStatusSubjec.next(true);
      console.log('🎉 LoginService - Estado de autenticación actualizado a true');
      return true;
    } else {
      console.error('❌ LoginService - Error al guardar token en localStorage');
      return false;
    }
  }

  public isLoggedIn(){
    let tokenStr = localStorage.getItem('token');
    if(tokenStr == undefined || tokenStr == '' || tokenStr == null){
      return false;
    }else{
      return true;
    }
  }

  //cerramos sesion y eliminamos el token del localStorage
  public logout(): boolean {
    console.log('🚪 LoginService - Cerrando sesión');
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    
    // Notificar que el usuario ya no está autenticado
    this.loginStatusSubjec.next(false);
    console.log('✅ LoginService - Estado de login actualizado a false');
    
    return true;
  }

  //obtenemos el token
  public getToken(){
    return localStorage.getItem('token');
  }

  public setUser(user: any): void {
    console.log('👤 LoginService - Guardando usuario:', user.email || user.nombre);
    localStorage.setItem('user', JSON.stringify(user));
    console.log('✅ LoginService - Usuario guardado en localStorage');
  }

  public getUser(){
    let userStr = localStorage.getItem('user');
    if(userStr != null){
      return JSON.parse(userStr);
    }else{
      console.log('⚠️ LoginService - No hay datos de usuario en localStorage');
      return null;
    }
  }

  public getUserRole(){
    let user = this.getUser();
    if (user && user.authorities && user.authorities.length > 0) {
      return user.authorities[0].authority;
    }
    console.log('⚠️ LoginService - No se pudo obtener el rol del usuario');
    return null;
  }

  // Método para restaurar sesión automáticamente si hay token válido
  public restoreSession(): void {
    console.log('🔄 LoginService - Intentando restaurar sesión');
    
    if (this.isLoggedIn()) {
      const user = this.getUser();
      if (user) {
        console.log('✅ LoginService - Sesión restaurada para:', user.email || user.nombre);
        this.loginStatusSubjec.next(true);
      } else {
        console.log('⚠️ LoginService - Token existe pero no hay datos de usuario');
        // Si hay token pero no hay usuario, intentar obtenerlo del backend
        this.getCurrentUser().subscribe({
          next: (user: any) => {
            this.setUser(user);
            this.loginStatusSubjec.next(true);
            console.log('✅ LoginService - Usuario recuperado del backend:', user.email || user.nombre);
          },
          error: (error) => {
            console.error('❌ LoginService - Error al recuperar usuario, limpiando sesión:', error);
            this.logout();
          }
        });
      }
    } else {
      console.log('📭 LoginService - No hay sesión para restaurar');
      this.loginStatusSubjec.next(false);
    }
  }

  // Método para verificar estado del token y localStorage
  public debugTokenState(): void {
    console.log('🔍 LoginService - Debug Estado del Token:');
    console.log('  - isLoggedIn():', this.isLoggedIn());
    console.log('  - Token en localStorage:', localStorage.getItem('token'));
    console.log('  - Usuario en localStorage:', localStorage.getItem('user'));
    console.log('  - loginStatusSubjec.value:', this.loginStatusSubjec.value);
  }

}
