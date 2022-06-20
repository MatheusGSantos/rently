import { AxiosInstance } from 'axios';
import api from './api';
import { IChat } from '../pages/Chat';
import {
  ICreateUserDTO,
  IResultsFromSearchDTO,
  IResultInfo,
  IChatListDTO,
  NewObjectDTO,
} from './dtos';

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

  public async getResultsForHomePage(): Promise<IResultsFromSearchDTO> {
    const { data } = await this.api.get(`/item/cards`);

    return data;
  }

  public async getProductInfo(id: string | undefined): Promise<IResultInfo> {
    const { data } = await this.api.get(`/item/one/${id}`);

    return data;
  }

  public async getChatList(): Promise<IChatListDTO> {
    const { data } = await this.api.get(`/chat/`);

    return data;
  }

  public async getMessages(chatId: string, timeout = 0): Promise<IChat[]> {
    const { data } = await this.api.get(`/chat/${chatId}`, { timeout });

    return data;
  }

  public async createChat(sellerId: string): Promise<IChatListDTO> {
    const { data } = await this.api.post(`/chat/create/${sellerId}`);

    return data;
  }

  public async createObject(newObject: NewObjectDTO): Promise<void> {
    await this.api.post(`/item/`, newObject);
  }

  public async getMyAds(): Promise<IResultsFromSearchDTO> {
    const { data } = await this.api.get(`/item`);

    return data;
  }

  public async deleteItem(itemId: string): Promise<void> {
    await this.api.delete(`/item/${itemId}`);
  }

  public async sendMessage(
    message: string,
    receiver: string,
  ): Promise<IChatListDTO> {
    const { data } = await this.api.post(`/chat`, {
      message,
      receiver,
    });

    return data;
  }
}
