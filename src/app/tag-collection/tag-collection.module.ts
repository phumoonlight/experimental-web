import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { SharedModule } from '../shared/shared.module'
import { TagCollectionComponent } from './tag-collection.component'
import { TagCollectionRoutingModule } from './tag-collection.routing'

@NgModule({
  declarations: [
    TagCollectionComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    TagCollectionRoutingModule,
  ],
})
export class TagCollectionModule { }
