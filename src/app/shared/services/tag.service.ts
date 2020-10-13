import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { ApiGetResponse } from '../models/api-get-response'
import { ApiPostResponse } from '../models/api-post-response'
import { DocumentTag } from '../models/document-tag'
import { environment } from '../../../environments/environment'


@Injectable()
export class TagService {
  baseEndpoint = `${environment.apiBaseUrl}/tags`

  constructor(
    private http: HttpClient
  ) { }

  fetchAllTag() {
    return this.http.get<ApiGetResponse<DocumentTag[]>>(this.baseEndpoint)
  }
}
