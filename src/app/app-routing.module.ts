import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { ProcessingPageComponent } from './processing-page/processing-page.component';
import { SelectModeComponent } from './select-mode/select-mode.component';
import { AvailableNotesComponent } from './available-notes/available-notes.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: WelcomePageComponent },
  {path: 'welcome', component: WelcomePageComponent },
  {path: 'processing', component: ProcessingPageComponent },
  {path: 'available-notes', component: AvailableNotesComponent },
  {path: 'select-mode', component: SelectModeComponent },
 //{path: 'not-found', component: PageNotFoundComponent },
  {path: '**', redirectTo: '/welcome' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
