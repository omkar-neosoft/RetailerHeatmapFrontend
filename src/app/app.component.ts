import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SalesVisitMapComponent } from './components/sales-visit-map/sales-visit-map.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SalesVisitMapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'RetailerHeatmapFrontend';
}
