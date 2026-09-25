import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

/**
 * UsersService (equivalente a la capa de negocio / services del backend).
 *
 * Centraliza el acceso a datos. Tiene dos modos:
 *  - useApi = false -> datos simulados en memoria (apartado 4 del PDF)
 *  - useApi = true  -> consume una API REST real con fetch (apartado 10, caso ampliado)
 */
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  /** Cambia a false para trabajar con los datos simulados. */
  private readonly useApi = true;
  private readonly apiUrl = 'https://dummyjson.com/users';

  private users: User[] = [
    { id: 1, name: 'Ana', email: 'ana@test.com', active: true },
    { id: 2, name: 'Luis', email: 'luis@test.com', active: false },
    { id: 3, name: 'Carlos', email: 'carlos@test.com', active: true },
  ];

  async getUsers(): Promise<User[]> {
    if (this.useApi) {
      return this.getUsersFromApi();
    }
    // Simula la latencia de una API REST
    return new Promise((resolve) => {
      setTimeout(() => resolve(this.users), 500);
    });
  }

  async getActiveUsers(): Promise<User[]> {
    const users = await this.getUsers();
    return users.filter((u) => u.active);
  }

  async getUserById(id: number): Promise<User | undefined> {
    const users = await this.getUsers();
    return users.find((u) => u.id === id);
  }

  /**
   * Caso práctico ampliado: consumo de API real con fetch + async/await.
   * dummyjson devuelve { users: [...] } con firstName/lastName, así que
   * se transforma (map) cada elemento a nuestro modelo User.
   */
  private async getUsersFromApi(): Promise<User[]> {
    const response = await fetch(this.apiUrl);
    if (!response.ok) {
      throw new Error(`Error HTTP ${response.status}`);
    }
    const data = await response.json();

    return data.users.map((u: any): User => ({
      id: u.id,
      name: `${u.firstName} ${u.lastName}`,
      email: u.email,
      // La API no tiene campo "active": se considera activo a quien tenga menos de 40 años
      active: u.age < 40,
    }));
  }
}
