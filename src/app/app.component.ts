import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./components/login/login.component";
import { NavComponent } from "./components/nav/nav.component";
import { CenterComponent } from "./components/center/center.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HomeComponent } from './components/home/home.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet]
})
export class AppComponent {
  title = 'coffeemaker';
}
