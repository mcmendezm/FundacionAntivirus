import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { OurteamComponent } from './components/ourteam/ourteam.component';
import { RegisterComponent } from './components/register/register.component';
import { CarouselComponent } from './components/carousel/carousel.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path:'news' , component: NewsComponent },
  { path: 'ourteam', component: OurteamComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'carousel', component: CarouselComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled'}
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }