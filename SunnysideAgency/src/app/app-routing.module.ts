import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactFormComponent } from './header/contact-form/contact-form.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: 'Home', component: AppComponent},
  {path: 'Contact', component: ContactFormComponent},
  {path: '**', component:AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
