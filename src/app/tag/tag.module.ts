import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { TagListComponent} from './tag-list/tag-list.component'
import { TagFormComponent } from './tag-form/tag-form.component'

@NgModule({
  declarations: [
    TagFormComponent,
    TagListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    TagFormComponent,
    TagListComponent,
  ]
})
export class TagModule { }
