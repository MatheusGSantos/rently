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
  email: string;
  category: string;
}

export type IResultsFromSearchDTO = IResultInfo[];
