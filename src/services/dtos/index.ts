export interface ICreateUserDTO {
  name: string;
  email: string;
  password: string;
}

export interface IResultInfo {
  id: string;
  ObjectName: string;
  price: number;
  description: string;
  image: string;
  OwnerName: string;
  // eslint-disable-next-line camelcase
  owner_id: string;
  email: string;
  category: string;
}

export interface NewObjectDTO {
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

export type IResultsFromSearchDTO = IResultInfo[];

export type IChatListDTO = { id: string; name: string; seller: string }[];
