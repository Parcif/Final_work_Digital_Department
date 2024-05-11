import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpeakersComponent } from './speakers/speakers.component';
import { SubwoofersComponent } from './subwoofers/subwoofers.component';
import { AmplifiersComponent } from './amplifiers/amplifiers.component';

const routes: Routes = [
  {path: 'speakers', component: SpeakersComponent},
  {path: 'subwoofers', component: SubwoofersComponent},
  {path: 'amplifiers', component: AmplifiersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }