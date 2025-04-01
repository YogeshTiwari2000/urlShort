import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UrlShortComponent } from "./components/url-short/url-short.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UrlShortComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
})
export class AppComponent {
  title = 'testing';
}
