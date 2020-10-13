import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'
import { forkJoin } from 'rxjs'
import { AppService } from '../app.service'
import { ApiService } from '../shared/services/api.service'

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {
  isLoading: boolean = true
  isApiOk: boolean
  isDataFetchingFailed: boolean
  tagList: any[]
  tagCollectionList: any[]
  isFormTagRefIdInvalid: boolean
  createTagForm: FormGroup = new FormGroup({
    tagName: new FormControl('' ),
    tagRefId: new FormControl('', [
      Validators.required,
    ]),
    tagDescription: new FormControl(''),
  })

  constructor(
    private appService: AppService,
    private apiService: ApiService,
  ) { }

  ngOnInit() {
    this.checkApiStatus()
    this.apiService.checkStatus().then(online => {
      console.log(online)
    })
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
      fetchAllTagCollection: this.appService.fetchAllTagCollection(),
    }).subscribe(
      (response) => {
        const fetchAllTagResponse = response.fetchAllTag
        const fetchAllTagCollectionResponse = response.fetchAllTagCollection
        this.tagCollectionList = fetchAllTagCollectionResponse.document
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

  onSubmitCreateTag(createTagForm: FormGroup) {
    console.log('call tag')
    if (createTagForm.invalid) {
      this.isFormTagRefIdInvalid = true
      return
    }
    const formValue = createTagForm.value
    const payloadFieldTagName = formValue.tagName && {
      tag_name: formValue.tagName
    }
    const payloadFieldTagDescription = formValue.tagDescription && {
      tag_description: formValue.tagDescription
    }
    this.appService.createTag({
      tag_ref_id: formValue.tagRefId,
      ...payloadFieldTagName,
      ...payloadFieldTagDescription,
    }).subscribe(
      (response) => {
        this.tagList.push(response.created_document)
      },
      (error) => {
        console.error(error)
      },
      () => {
        createTagForm.reset()
      }
    )
  }

  onClickDelete(tagRefId: string) {
    const confirmDelete = confirm(`delete tag id : ${tagRefId}`)
    if (!confirmDelete) {
      return
    }
    this.appService.deleteTag(tagRefId).subscribe(
      () => {
        this.tagList = this.tagList.filter((tag) => (
          tag.ref_id !== tagRefId
        ))
        alert('delete success')
      },
      () => {
        alert('delete failed')
      }
    )
  }
}
