import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { PageIndexComponent } from './pages/page-index/page-index.component'
import { PageEditTagComponent } from './pages/page-edit-tag/page-edit-tag.component'

const routes: Routes = [
  {
    path: '',
    component: PageIndexComponent,
  },
  {
    path: '',
    component: PageEditTagComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
