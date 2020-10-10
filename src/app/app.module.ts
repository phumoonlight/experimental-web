import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app.routing'
import { AppComponent } from './app.component'
import { AppService } from './app.service'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
  ],
  providers: [
    AppService,
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
