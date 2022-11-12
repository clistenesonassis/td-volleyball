import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments';
import { StateId, Response } from './get-cities-brazil-by-state.types';

@Injectable({ providedIn: 'root' })
export class GetCitiesBrazilByStateService {
  private readonly baseUrl = environment.bffUrl.ibgeLocality;
  private readonly url = (stateId: StateId) =>
    `${this.baseUrl}/api/v1/localidades/estados/${stateId}/distritos`;

  constructor(private httpClient: HttpClient) {}

  execute(stateId: StateId) {
    return this.httpClient.get<Response>(this.url(stateId));
  }
}
