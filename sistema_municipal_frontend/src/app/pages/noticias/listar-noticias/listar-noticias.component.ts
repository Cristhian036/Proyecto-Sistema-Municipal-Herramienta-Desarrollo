import { Component, OnInit } from '@angular/core';
import { NoticiaService, Noticia } from '../../../services/noticia.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-listar-noticias',
  templateUrl: './listar-noticias.component.html',
  styleUrls: ['./listar-noticias.component.css']
})
export class ListarNoticiasComponent implements OnInit {

  noticias: Noticia[] = [];
  cargando = false;

  constructor(
    private noticiaService: NoticiaService,
    private snack: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.cargarNoticias();
  }

  cargarNoticias() {
    this.cargando = true;
    this.noticiaService.listarNoticias().subscribe(
      (data) => {
        this.noticias = data;
        this.cargando = false;
      },
      (error) => {
        console.error('Error al cargar noticias:', error);
        this.snack.open('Error al cargar las noticias', 'Aceptar', { duration: 3000 });
        this.cargando = false;
      }
    );
  }

  eliminarNoticia(id: number) {
    if (confirm('¿Está seguro de que desea eliminar esta noticia?')) {
      this.noticiaService.eliminarNoticia(id).subscribe(
        () => {
          this.snack.open('Noticia eliminada exitosamente', 'Aceptar', { duration: 3000 });
          this.cargarNoticias(); // Recargar la lista
        },
        (error) => {
          console.error('Error al eliminar noticia:', error);
          this.snack.open('Error al eliminar la noticia', 'Aceptar', { duration: 3000 });
        }
      );
    }
  }

  formatearFecha(fecha: Date): string {
    return new Date(fecha).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }
}
