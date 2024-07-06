import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { CenterComponent } from "../center/center.component";
import { NavComponent } from "../nav/nav.component";
import { CoffeelistComponent } from '../coffeelist/coffeelist.component';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [CoffeelistComponent, NavComponent, CenterComponent, FooterComponent,RouterOutlet]
})
export class HomeComponent {

}
