import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable()
export class AppService {
  private baseUrl: string = 'https://experimentalapi.herokuapp.com'

  constructor(
    private http: HttpClient
  ) { }

  checkApiHealth() {
    return this.http.get(this.baseUrl)
  }
}
