import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ArraysComponent } from './pages/arrays/arrays.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'arrays', component: ArraysComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
