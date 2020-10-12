import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { CommonModule } from '@angular/common'
import { AppRoutingModule } from './app.routing'
import { AppComponent } from './app.component'
import { AppService } from './app.service'
import { CommonServiceModule } from './common-service/common-service.module'
import { SharedModule } from './shared/shared.module'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SharedModule,
    AppRoutingModule,
    CommonServiceModule,
  ],
  providers: [
    AppService,
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
