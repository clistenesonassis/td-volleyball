import { environment as environmentBase } from './environment.base';

export const environment = {
  ...environmentBase,
  production: true,
  bffUrl: {
    ibgeLocality: 'https://servicodados.ibge.gov.br/api/v1/localidades',
  },
};
