import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

interface Tag {
  ref_id: string
  name: string
  description: string
}

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.css']
})
export class TagListComponent implements OnInit {
  @Input() tagList: Tag[] = []
  @Output() delete = new EventEmitter<string>()

  constructor(

  ) { }

  ngOnInit(): void {

  }

  onClickDelete(tagRefId: string) {
    this.delete.emit(tagRefId)
  }
}
