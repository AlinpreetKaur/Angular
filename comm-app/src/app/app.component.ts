import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SiblingCompComponent } from "./sibling-comp/sibling-comp.component";
import { SiblingCompBComponent } from "./sibling-comp-b/sibling-comp-b.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SiblingCompComponent, SiblingCompBComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'comm-app';
}
