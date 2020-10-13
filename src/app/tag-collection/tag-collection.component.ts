import { Component, OnInit } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { TagService } from '../shared/services/tag.service'
import { TagCollectionService } from '../shared/services/tag-collection.service'

@Component({
  selector: 'app-tag-collection',
  templateUrl: './tag-collection.component.html',
  styleUrls: ['./tag-collection.component.css']
})
export class TagCollectionComponent implements OnInit {
  tagCollectionList: any[] = []
  tagList: any[] = []
  constructor(
    private tagCollectionService: TagCollectionService,
    private tagService: TagService
  ) { }

  ngOnInit(): void {
    this.tagCollectionService.fetchAllTagCollection().subscribe((response) => {
      this.tagCollectionList = response.document
    })
    this.tagService.fetchAllTag().subscribe((response) => {
      this.tagList = response.document
    })
  }

  onSubmitCreateTagCollection(formValue: any): void {
    console.log(formValue)
    const tagRefId = formValue.tagRefId
    const tagJsonData = formValue.jsonData
    this.tagCollectionService.createTagCollecion({
      tag_ref_id: tagRefId,
      data: JSON.parse(tagJsonData),
    }).subscribe((response) => {
      this.tagCollectionList.push(response.created_document)
    })
  }
}
