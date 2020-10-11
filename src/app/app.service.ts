import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../environments/environment'

interface CreateTagPayload {
  tag_ref_id: string
  tag_name?: string
  tag_description?: string
}

interface GetAllTagResponse {
  status_code: number
  document: any[]
}

interface CreateTagResponse {
  status_code: number
  created_document: any
}

@Injectable()
export class AppService {
  routeTag = `${environment.apiBaseUrl}/tags`
  routeTagCollection = `${environment.apiBaseUrl}/tagcollections`
  constructor(
    private http: HttpClient
  ) { }

  checkApiHealth() {
    return this.http.get(environment.apiBaseUrl)
  }

  fetchAllTag() {
    return this.http.get<GetAllTagResponse>(this.routeTag)
  }

  fetchAllTagCollection() {
    return this.http.get<GetAllTagResponse>(this.routeTagCollection)
  }

  createTag(payload: CreateTagPayload) {
    console.log(payload)
    return this.http.post<CreateTagResponse>(this.routeTag, payload)
  }
}
