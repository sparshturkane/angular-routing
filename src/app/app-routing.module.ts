import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'footer', component: FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}