import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { developmentGuard } from './guards/development.guard';
import { UnderConstructionComponent } from './components/under-construction/under-construction.component';

const routes: Routes = [
  { path: '', component: HomePageComponent, canActivate: [developmentGuard] },
  { path: 'developing', component: UnderConstructionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
