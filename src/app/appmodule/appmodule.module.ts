import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../components/login/login.component';
import { HomeComponent } from '../components/home/home.component';
import { NavComponent } from '../components/nav/nav.component';
import { FooterComponent } from '../components/footer/footer.component';
import { ContactusComponent } from '../components/contactus/contactus.component';
import { NotfoundComponent } from '../components/notfound/notfound.component';
import { CoffeelistComponent } from '../components/coffeelist/coffeelist.component';
import { CenterComponent } from '../components/center/center.component';
import { AboutusComponent } from '../components/aboutus/aboutus.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    ContactusComponent,
    NotfoundComponent,
    CoffeelistComponent,
    CenterComponent,
    AboutusComponent
  ]
})
export class AppmoduleModule { }
