import { AxiosInstance } from 'axios';
import api from './api';
import { ICreateUserDTO } from './dtos';

export class ApiService {
  private api: AxiosInstance = api;

  public async createUser(user: ICreateUserDTO): Promise<void> {
    await this.api.post('/users', user);
  }
}
