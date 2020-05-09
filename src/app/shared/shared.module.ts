import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloComponent } from './hello/hello.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [HelloComponent, ContactListComponent, ContactDetailComponent, AboutusComponent, LoginComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
