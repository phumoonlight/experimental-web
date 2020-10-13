import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment'

interface GetResponseBody {
  status_code: number
  document: any[]
}

interface CreateResponseBody {
  status_code: number
  created_document: any
}

interface CreateTagCollectionPayload {
  tag_ref_id: string
  data: any
}

@Injectable()
export class TagCollectionService {
  private routeTagCollection = `${environment.apiBaseUrl}/tagcollections`
  
  constructor(
    private http: HttpClient
  ) { }

  fetchAllTagCollection() {
    return this.http.get<GetResponseBody>(this.routeTagCollection)
  }

  createTagCollecion(payload: CreateTagCollectionPayload) {
    return this.http.post<CreateResponseBody>(this.routeTagCollection, payload)
  }
}
