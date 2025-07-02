import { NormalGuard } from './services/normal.guard';
import { AdminGuard } from './services/admin.guard';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { ForumListComponent } from './pages/forum-list/forum-list.component';
import { CrearNoticiaComponent } from './pages/noticias/crear-noticia/crear-noticia.component';
import { ListarNoticiasComponent } from './pages/noticias/listar-noticias/listar-noticias.component';
import { NoticiasComponent } from './pages/noticias/noticias/noticias.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path : '',
    component : HomeComponent,
    pathMatch : 'full'
  },
  {
    path : 'signup',
    component : SignupComponent,
    pathMatch : 'full'
  },
  {
    path : 'login',
    component : LoginComponent,
    pathMatch : 'full'
  },
  {
    path:'admin',
    component:DashboardComponent,
    pathMatch:'full',
    canActivate:[AdminGuard]
  },
  {
    path:'user-dashboard',
    component:UserDashboardComponent,
    pathMatch:'full',
    canActivate:[NormalGuard]
  },
  {
    path: 'foros', 
    component: ForumListComponent
  },
  {
    path: 'noticias',
    component: NoticiasComponent
  },
  {
    path: 'noticias-admin',
    component: NoticiasComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'noticias-trabajador',
    component: NoticiasComponent,
    canActivate: [NormalGuard]
  },
  {
    path: 'listar-noticias',
    component: ListarNoticiasComponent
  },
  {
    path: 'crear-noticia',
    component: CrearNoticiaComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'test-noticias',
    component: NoticiasComponent
  },
  { path: '', redirectTo: '/foros', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
