import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from '../nav/nav.component';
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-center',
    standalone: true,
    templateUrl: './center.component.html',
    styleUrl: './center.component.css',
    imports: [RouterOutlet, NavComponent, FooterComponent]
})
export class CenterComponent {

}
