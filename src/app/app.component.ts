import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroSectionComponent } from './Pages/hero-section/hero-section.component';
import { ClientSectionComponent } from './Pages/client-section/client-section.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ClientSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'nexcent';
}
