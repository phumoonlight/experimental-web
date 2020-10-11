import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../environments/environment'

interface CreateTagPayload {
  tag_ref_id: string
  tag_name?: string
  tag_description?: string
}

interface GetAllTagResponse {
  status_code: number,
  document: any[],
}

@Injectable()
export class AppService {
  routeTag = `${environment.apiBaseUrl}/tags`
  constructor(
    private http: HttpClient
  ) { }

  checkApiHealth() {
    return this.http.get(environment.apiBaseUrl)
  }

  fetchAllTag() {
    return this.http.get<GetAllTagResponse>(this.routeTag)
  }

  createTag(payload: CreateTagPayload) {
    return this.http.post(this.routeTag, payload)
  }
}
