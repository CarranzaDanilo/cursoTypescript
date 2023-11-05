import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ArraysComponent } from './pages/arrays/arrays.component';
import { TypesComponent } from './pages/types/types.component';
import { RxjsOperatorsComponent } from './pages/rxjs-operators/rxjs-operators.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'arrays', component: ArraysComponent},
  {path: 'types', component: TypesComponent},
  {path: 'rxjs', component: RxjsOperatorsComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
