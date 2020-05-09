import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutusComponent } from './shared/aboutus/aboutus.component';
import { BindingsComponent } from './bindings/bindings/bindings.component';
import { HelloComponent } from './shared/hello/hello.component';
import { LoginComponent } from './shared/login/login.component';
import { ToolbarComponent } from './material/toolbar/toolbar.component';
import { ContactListComponent } from './shared/contact-list/contact-list.component';
import { ContactDetailComponent } from './shared/contact-detail/contact-detail.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'hello'},
  { path: 'hello', component: HelloComponent},
  { path: 'toolbar', component: ToolbarComponent},
  { path: 'aboutus', component: AboutusComponent},
  { path: 'aboutus', component: LoginComponent},
  { path: 'bindings', component: BindingsComponent},
  { path: 'contacts', component: ContactListComponent},
  { path: 'contact/:id', component: ContactDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // NOTE ilker there can be only 1 root routes. But there can be many child routes, which will be used by "dynamically loaded modules"
  exports: [RouterModule]
})
export class AppRoutingModule { }
