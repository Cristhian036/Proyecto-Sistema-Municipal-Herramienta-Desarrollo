import { Component, OnInit } from '@angular/core';
import { NoticiaService } from '../../../services/noticia.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-noticia',
  templateUrl: './crear-noticia.component.html',
  styleUrls: ['./crear-noticia.component.css']
})
export class CrearNoticiaComponent implements OnInit {

  noticia = {
    titulo: '',
    descripcion: '',
    autor: ''
  };

  imagenSeleccionada: File | null = null;
  imagenPreview: string | null = null;

  constructor(
    private noticiaService: NoticiaService,
    private snack: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onImageSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.imagenSeleccionada = file;
      
      // Crear preview de la imagen
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imagenPreview = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  crearNoticia() {
    if (!this.noticia.titulo.trim()) {
      this.snack.open('El título es requerido', 'Aceptar', { duration: 3000 });
      return;
    }

    if (!this.noticia.descripcion.trim()) {
      this.snack.open('La descripción es requerida', 'Aceptar', { duration: 3000 });
      return;
    }

    if (!this.noticia.autor.trim()) {
      this.snack.open('El autor es requerido', 'Aceptar', { duration: 3000 });
      return;
    }

    if (!this.imagenSeleccionada) {
      this.snack.open('Debe seleccionar una imagen', 'Aceptar', { duration: 3000 });
      return;
    }

    const formData = new FormData();
    formData.append('titulo', this.noticia.titulo);
    formData.append('descripcion', this.noticia.descripcion);
    formData.append('autor', this.noticia.autor);
    formData.append('imagen', this.imagenSeleccionada);

    this.noticiaService.crearNoticia(formData).subscribe(
      (response) => {
        this.snack.open('Noticia creada exitosamente', 'Aceptar', { duration: 3000 });
        this.router.navigate(['/noticias']);
      },
      (error) => {
        console.error('Error al crear noticia:', error);
        this.snack.open('Error al crear la noticia', 'Aceptar', { duration: 3000 });
      }
    );
  }

  limpiarFormulario() {
    this.noticia = {
      titulo: '',
      descripcion: '',
      autor: ''
    };
    this.imagenSeleccionada = null;
    this.imagenPreview = null;
  }
}
