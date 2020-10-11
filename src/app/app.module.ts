import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { CommonModule } from '@angular/common'
import { AppRoutingModule } from './app.routing'
import { AppComponent } from './app.component'
import { AppService } from './app.service'
import { CommonPipeModule } from './common-pipe/common-pipe.module'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule,
    CommonPipeModule,
  ],
  providers: [
    AppService,
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
