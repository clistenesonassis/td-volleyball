export type StateId = number | string;

export type Response = ResponseContentProps[];

export interface ResponseContentProps {
  id: number;
  sigla: string;
  nome: string;
  regiao: ResponseContentRegiaoProps;
}

export interface ResponseContentRegiaoProps {
  id: number;
  sigla: string;
  nome: string;
}
