import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonSpinner,
  IonSegment,
  IonSegmentButton,
  IonBadge,
  IonText,
  IonRefresher,
  IonRefresherContent,
} from '@ionic/angular';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user.model';

/**
 * UsersPage (equivalente a controller + route).
 * Gestiona la lógica de presentación y delega los datos en el servicio.
 */
@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
  imports: [
    CommonModule,
    RouterLink,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonSpinner,
    IonSegment,
    IonSegmentButton,
    IonBadge,
    IonText,
    IonRefresher,
    IonRefresherContent,
  ],
})
export class UsersPage implements OnInit {
  users: User[] = [];
  loading = false;
  error = '';
  filter: 'active' | 'all' = 'active';

  constructor(private usersService: UsersService) {}

  async ngOnInit() {
    await this.loadUsers();
  }

  async loadUsers() {
    try {
      this.loading = true;
      this.error = '';
      this.users =
        this.filter === 'active'
          ? await this.usersService.getActiveUsers()
          : await this.usersService.getUsers();
    } catch (error) {
      console.error('Error:', error);
      this.error = 'No se pudieron cargar los usuarios.';
    } finally {
      this.loading = false;
    }
  }

  async onFilterChange(event: CustomEvent) {
    this.filter = event.detail.value;
    await this.loadUsers();
  }

  async onRefresh(event: CustomEvent) {
    await this.loadUsers();
    (event.target as HTMLIonRefresherElement).complete();
  }
}
