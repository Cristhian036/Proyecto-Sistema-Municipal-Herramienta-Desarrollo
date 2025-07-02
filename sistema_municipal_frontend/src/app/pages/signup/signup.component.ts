import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public user = {
    email: '',
    password: '',
    nombre: '',
    apellido: '',
    telefono: ''
  }

  showPassword = false;
  loading = false;
  error = '';

  constructor(private userService: UserService, private snack: MatSnackBar) { }

  ngOnInit(): void { }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  formSubmit() {
    this.error = '';
    this.loading = true;

    console.log(this.user);

    if (!this.user.email || this.user.email.trim() === '') {
      this.error = 'El email es requerido';
      this.loading = false;
      this.snack.open('El email es requerido !!', 'Aceptar', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
      return;
    }

    if (!this.user.nombre || this.user.nombre.trim() === '') {
      this.error = 'El nombre es requerido';
      this.loading = false;
      this.snack.open('El nombre es requerido !!', 'Aceptar', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
      return;
    }

    if (!this.user.apellido || this.user.apellido.trim() === '') {
      this.error = 'El apellido es requerido';
      this.loading = false;
      this.snack.open('El apellido es requerido !!', 'Aceptar', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
      return;
    }

    if (!this.user.password || this.user.password.trim() === '') {
      this.error = 'La contraseña es requerida';
      this.loading = false;
      this.snack.open('La contraseña es requerida !!', 'Aceptar', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
      return;
    }

    this.userService.añadirUsuario(this.user).subscribe(
      (data) => {
        console.log(data);
        this.loading = false;
        Swal.fire('Usuario guardado', 'Usuario registrado con éxito en el sistema', 'success');
        // Limpiar el formulario después del registro exitoso
        this.user = {
          email: '',
          password: '',
          nombre: '',
          apellido: '',
          telefono: ''
        };
      },
      (error) => {
        console.log(error);
        this.loading = false;
        this.error = 'Ha ocurrido un error en el sistema';
        this.snack.open('Ha ocurrido un error en el sistema !!', 'Aceptar', {
          duration: 3000
        });
      }
    );
  }
}
