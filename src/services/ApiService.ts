import { AxiosInstance } from 'axios';
import api from './api';
import { ICreateUserDTO, IResultsFromSearchDTO } from './dtos';

export class ApiService {
  private api: AxiosInstance = api;

  public async createUser(user: ICreateUserDTO): Promise<void> {
    await this.api.post('/user', user);
  }

  public async getResultsFromSearch(
    search: string,
  ): Promise<IResultsFromSearchDTO> {
    const { data } = await this.api.get(`/item/${search}`);

    return data;
  }
}
