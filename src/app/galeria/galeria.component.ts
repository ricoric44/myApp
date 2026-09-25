import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class GaleriaComponent implements OnInit {
  public tituloSeccion: string = 'Galería de Imágenes Dinámica';
  public descripcion: string = 'Esta imagen se carga desde el directorio de assets mediante Property Binding.';
  public rutaImagenLocal: string = 'assets/foto1.jpg';

  constructor() {}

  ngOnInit() {}
}