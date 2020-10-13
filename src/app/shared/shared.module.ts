import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ApiStatusPipe } from './pipes/api-status.pipe'
import { ApiService } from './services/api.service'
import { TagService } from './services/tag.service'
import { TagCollectionService } from './services/tag-collection.service'

@NgModule({
  declarations: [
    ApiStatusPipe,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ApiStatusPipe,
  ],
  providers: [
    ApiService,
    TagService,
    TagCollectionService,
  ]
})
export class SharedModule { }
