import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageIndexComponent } from './page-index/page-index.component'
import { SharedModule } from '../shared/shared.module'
import { TagModule } from '../tag/tag.module'

@NgModule({
  declarations: [
    PageIndexComponent,
  ],
  imports: [
    CommonModule,
    TagModule,
    SharedModule,
  ]
})
export class PagesModule { }
