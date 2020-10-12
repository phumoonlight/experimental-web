import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-tag-form',
  templateUrl: './tag-form.component.html',
  styleUrls: ['./tag-form.component.css']
})
export class TagFormComponent implements OnInit {
  @Output() submit = new EventEmitter()
  createTagForm: FormGroup = new FormGroup({
    tagRefId: new FormControl('', [
      Validators.required,
    ]),
    tagName: new FormControl(''),
    tagDescription: new FormControl(''),
  })
 
  constructor(
    
  ) { }

  ngOnInit(): void {

  }

  onSubmit() {
    this.submit.emit(this.createTagForm)
  }
}
