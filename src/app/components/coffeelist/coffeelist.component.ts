import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-coffeelist',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './coffeelist.component.html',
  styleUrl: './coffeelist.component.css'
})
export class CoffeelistComponent {

}
