import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { BannerComponent } from './components/banner/banner.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}