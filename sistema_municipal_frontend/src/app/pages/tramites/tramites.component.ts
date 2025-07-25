import { Component } from '@angular/core';

@Component({
  selector: 'app-tramites',
  templateUrl: './tramites.component.html',
  styleUrls: ['./tramites.component.css']
})
export class TramitesComponent {
  searchTerm: string = '';
  
  tramites = [
    {
      title: 'Licencias y Permisos',
      description: 'Licencias de funcionamiento, edificación, eventos y anuncios publicitarios.',
      icon: 'fas fa-file-alt fa-3x text-wine',
      route: '/tramites/licencias-permisos',
      keywords: ['licencia', 'funcionamiento', 'edificación', 'eventos', 'anuncios', 'publicitarios', 'permisos']
    },
    {
      title: 'Tributos Municipales',
      description: 'Impuesto predial, arbitrios, alcabala y patrimonio vehicular.',
      icon: 'fas fa-dollar-sign fa-3x text-wine',
      route: '/tramites/tributos-municipales',
      keywords: ['tributos', 'impuesto', 'predial', 'arbitrios', 'alcabala', 'patrimonio', 'vehicular', 'pago']
    },
    {
      title: 'Registros Civiles',
      description: 'Partidas de nacimiento, matrimonio, defunción y otros registros.',
      icon: 'fas fa-users fa-3x text-wine',
      route: '/tramites/registros-civiles',
      keywords: ['registro', 'civil', 'partida', 'nacimiento', 'matrimonio', 'defunción', 'acta']
    },
    {
      title: 'Obras y Construcción',
      description: 'Permisos de construcción, habilitaciones urbanas y certificados.',
      icon: 'fas fa-building fa-3x text-wine',
      route: '/tramites/obras-construccion',
      keywords: ['obras', 'construcción', 'habilitación', 'urbana', 'certificado', 'edificar']
    },
    {
      title: 'Comercio y Publicidad',
      description: 'Autorizaciones para comercio ambulatorio, ferias y publicidad.',
      icon: 'fas fa-store fa-3x text-wine',
      route: '/tramites/comercio-publicidad',
      keywords: ['comercio', 'ambulatorio', 'feria', 'publicidad', 'autorización', 'negocio']
    },
    {
      title: 'Transporte y Vialidad',
      description: 'Permisos de circulación, transporte público y señalización.',
      icon: 'fas fa-truck fa-3x text-wine',
      route: '/tramites/transporte-vialidad',
      keywords: ['transporte', 'vialidad', 'circulación', 'público', 'señalización', 'vehículo']
    },
    {
      title: 'Servicios Públicos',
      description: 'Servicios de agua, luz, limpieza y mantenimiento urbano.',
      icon: 'fas fa-lightbulb fa-3x text-wine',
      route: '/tramites/servicios-publicos',
      keywords: ['servicios', 'públicos', 'agua', 'luz', 'limpieza', 'mantenimiento', 'urbano']
    },
    {
      title: 'Otros Trámites',
      description: 'Otros trámites y servicios municipales.',
      icon: 'fas fa-question-circle fa-3x text-wine',
      route: '/tramites/otros-tramites',
      keywords: ['otros', 'trámites', 'servicios', 'municipales', 'diversos']
    }
  ];

  get filteredTramites() {
    if (!this.searchTerm || this.searchTerm.trim() === '') {
      return this.tramites;
    }

    const term = this.searchTerm.toLowerCase().trim();
    return this.tramites.filter(tramite => 
      tramite.title.toLowerCase().includes(term) ||
      tramite.description.toLowerCase().includes(term) ||
      tramite.keywords.some(keyword => keyword.toLowerCase().includes(term))
    );
  }

  onSearchChange(event: any) {
    this.searchTerm = event.target.value;
  }
}
