import { Component } from '@angular/core';
import { GaleriaComponent } from '../galeria/galeria.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [GaleriaComponent],
})
export class HomePage {
  constructor() {}
}