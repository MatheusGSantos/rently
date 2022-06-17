import { AxiosInstance } from 'axios';
import api from './api';
import { ICreateUserDTO, IResultsFromSearchDTO, IResultInfo } from './dtos';

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

  public async getResultsForHomePage(
  ): Promise<IResultsFromSearchDTO> {
    const { data } = await this.api.get(`/item/cards`);

    return data;
  }

  public async getProductInfo(
    id: string | undefined,
  ): Promise<IResultInfo> {
    const { data } = await this.api.get(`/item/one/${id}`);

    return data;
  }
}
