import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ApiStatusPipe } from './api-status.pipe'

@NgModule({
  declarations: [
    ApiStatusPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ApiStatusPipe,
  ]
})
export class CommonPipeModule { }
