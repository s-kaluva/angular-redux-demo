import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class homeServiceService {
  private url = 'https://5c3ce12c29429300143fe570.mockapi.io/api/registeredusers';
   
  constructor(private httpClient: HttpClient) { }
  
  getUsers(){
    return this.httpClient.get(this.url);
  }
  getProjectMemberships() {
      return this.httpClient.get('https://5c3ce12c29429300143fe570.mockapi.io/api/projectmemberships')
  }
}
