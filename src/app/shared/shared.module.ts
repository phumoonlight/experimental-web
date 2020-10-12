import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ApiStatusPipe } from './pipes/api-status.pipe'
import { ApiService } from './services/api.service'

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
  ]
})
export class SharedModule { }
