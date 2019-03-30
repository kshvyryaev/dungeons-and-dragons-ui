import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharactersPageComponent } from './parents/characters-page/characters-page.component';
import { CharacterPageComponent } from './parents/character-page/character-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'characters', pathMatch: 'full' },
  { path: 'characters', component: CharactersPageComponent },
  { path: 'character/:id', component: CharacterPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
