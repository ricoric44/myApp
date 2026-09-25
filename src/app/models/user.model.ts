/**
 * Modelo User (equivalente a la entidad / modelo del backend Node.js).
 * Se usa una interface para tipar los datos en toda la app.
 */
export interface User {
  id: number;
  name: string;
  email: string;
  active: boolean;
}
