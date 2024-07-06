import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';



export const routes: Routes = [
    {path:"",redirectTo:'login',pathMatch:"full"},
    {path:'login',component:LoginComponent},
    {path:'home',component:HomeComponent},
    {path:'aboutus',component:AboutusComponent},
    {path:'contactus',component:ContactusComponent},
    
    // {path: '**', redirectTo: '/login', pathMatch: 'full' }

   

];
