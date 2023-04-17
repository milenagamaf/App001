import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { PlanosComponent } from './planos/planos.component';
import { SobreComponent } from './sobre/sobre.component';

const routes: Routes = [
  { path: '', component: ContentComponent},
  { path: 'planos', component: PlanosComponent},
  { path: 'sobre', component: SobreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
