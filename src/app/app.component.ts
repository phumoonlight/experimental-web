import { Component, OnInit } from '@angular/core'
import { forkJoin } from 'rxjs'
import { AppService } from './app.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isApiOk: boolean = false
  isLoading: boolean = true
  isDataFetchingFailed: boolean | undefined = undefined
  tagList: any[] = []
  constructor(
    private appService: AppService
  ) { }

  ngOnInit() {
    this.checkApiStatus()
  }

  checkApiStatus() {
    this.appService.checkApiHealth().subscribe(
      () => {
        this.isApiOk = true
        this.fetchNeededData()
      },
      (error) => {
        console.error(error)
        this.isApiOk = false
        this.isLoading = false
      },
    )
  }

  fetchNeededData() {
    forkJoin({
      fetchAllTag: this.appService.fetchAllTag(),
    }).subscribe(
      (response) => {
        const fetchAllTagResponse = response.fetchAllTag
        this.tagList = fetchAllTagResponse.document
      },
      (error) => {
        console.error(error)
        this.isDataFetchingFailed = true
        this.isLoading = false
      },
      () => {
        this.isDataFetchingFailed = false
        this.isLoading = false
      }
    )
  }
}
