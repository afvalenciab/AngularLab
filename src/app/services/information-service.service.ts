import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ENDPONINT_FIREBASE } from '../../environments/environment';

@Injectable()
export class InformationServiceService {

  constructor(private httpClient: HttpClient) { }

  getInformationPeople(){
    return this.httpClient.get(`${ENDPONINT_FIREBASE}/people.json`);
  }

}
