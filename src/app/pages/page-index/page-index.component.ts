import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'
import { forkJoin } from 'rxjs'
import { AppService } from '../../app.service'

@Component({
  selector: 'app-page-index',
  templateUrl: './page-index.component.html',
  styleUrls: ['./page-index.component.css']
})
export class PageIndexComponent implements OnInit {
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
    private formBuilder: FormBuilder,
    private appService: AppService,
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
