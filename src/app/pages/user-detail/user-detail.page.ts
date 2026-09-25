import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
  IonSpinner,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonBadge,
  IonText,
} from '@ionic/angular';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user.model';

/**
 * Página de detalle (mejora progresiva: navegación entre páginas).
 * El parámetro :id de la ruta llega como @Input gracias a withComponentInputBinding().
 */
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.page.html',
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonBackButton,
    IonSpinner,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonBadge,
    IonText,
  ],
})
export class UserDetailPage implements OnInit {
  @Input() id = '';

  user?: User;
  loading = false;

  constructor(private usersService: UsersService) {}

  async ngOnInit() {
    try {
      this.loading = true;
      this.user = await this.usersService.getUserById(Number(this.id));
    } catch (error) {
      console.error('Error:', error);
    } finally {
      this.loading = false;
    }
  }
}
