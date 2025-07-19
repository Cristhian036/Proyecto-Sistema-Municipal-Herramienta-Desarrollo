import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavbarComponent } from './components/navbar/navbar.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';

import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HomeComponent } from './pages/home/home.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDividerModule} from '@angular/material/divider';
import { authInterceptorProviders } from './services/auth.interceptor';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { ForumListComponent } from './pages/forum-list/forum-list.component';
import { CrearNoticiaComponent } from './pages/noticias/crear-noticia/crear-noticia.component';
import { ListarNoticiasComponent } from './pages/noticias/listar-noticias/listar-noticias.component';
import { NoticiasComponent } from './pages/noticias/noticias/noticias.component';
import { TramitesComponent } from './pages/tramites/tramites.component';
import { LicenciasPermisosComponent } from './pages/tramites/licencias-permisos/licencias-permisos.component';
import { TributosMunicipalesComponent } from './pages/tramites/tributos-municipales/tributos-municipales.component';
import { RegistrosCivilesComponent } from './pages/tramites/registros-civiles/registros-civiles.component';
import { ObrasConstruccionComponent } from './pages/tramites/obras-construccion/obras-construccion.component';
import { ComercioPublicidadComponent } from './pages/tramites/comercio-publicidad/comercio-publicidad.component';
import { TransporteVialidadComponent } from './pages/tramites/transporte-vialidad/transporte-vialidad.component';
import { ServiciosPublicosComponent } from './pages/tramites/servicios-publicos/servicios-publicos.component';
import { OtrosTramitesComponent } from './pages/tramites/otros-tramites/otros-tramites.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    UserDashboardComponent,
    ForumListComponent,
    CrearNoticiaComponent,
    ListarNoticiasComponent,
    NoticiasComponent,
    TramitesComponent,
    LicenciasPermisosComponent,
    TributosMunicipalesComponent,
    RegistrosCivilesComponent,
    ObrasConstruccionComponent,
    ComercioPublicidadComponent,
    TransporteVialidadComponent,
    ServiciosPublicosComponent,
    OtrosTramitesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatDividerModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
