import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from '../nav/nav.component';
import { FooterComponent } from "../footer/footer.component";
import { CoffeelistComponent } from "../coffeelist/coffeelist.component";

@Component({
    selector: 'app-center',
    standalone: true,
    templateUrl: './center.component.html',
    styleUrl: './center.component.css',
    imports: [RouterOutlet, NavComponent, FooterComponent, CoffeelistComponent]
})
export class CenterComponent {

}
