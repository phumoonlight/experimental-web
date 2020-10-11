import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TagService } from './tag.service'
import { TagCollectionService } from './tagcollection.service'

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    TagService,
    TagCollectionService,
  ],
})
export class CommonServiceModule { }
