import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments';
import { Response } from './get-brazil-states.types';

@Injectable({ providedIn: 'root' })
export class GetBrazilStatesService {
  private readonly baseUrl = environment.bffUrl.ibgeLocality;
  private readonly url = `${this.baseUrl}/api/v1/localidades/estados`;

  constructor(private httpClient: HttpClient) {}

  get response() {
    return this.httpClient.get<Response>(this.url);
  }
}
