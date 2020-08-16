import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { MoviebookingComponent } from './moviebooking/moviebooking.component';
import { MybookingComponent } from './mybooking/mybooking.component';

const routes: Routes = [ { path: "", component: HomeComponent},
{ path: "menu", component: MenuComponent},
{ path: "bookMovie", component: MoviebookingComponent},
{ path: "bookings", component: MybookingComponent},
{ path: "**", component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
