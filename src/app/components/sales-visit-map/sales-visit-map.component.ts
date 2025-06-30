import { Component } from '@angular/core';
import { SalesVisitDto } from '../../models/sales-visit-dto';
import { SalesVisitService } from '../../services/sales-visit/sales-visit.service';
import { latLng, tileLayer, Map, Marker, icon } from 'leaflet';
import { CommonModule } from '@angular/common';
import * as L from 'leaflet';
import 'leaflet.heat';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sales-visit-map',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sales-visit-map.component.html',
  styleUrl: './sales-visit-map.component.css',
})
export class SalesVisitMapComponent {
  salesVisits: SalesVisitDto[] = [];
  salesVisitsAllData: SalesVisitDto[] = [];
  map!: Map;

  mapOptions = {
    center: latLng([19.076, 72.8777]), // Default center of the map
    zoom: 12, // Default zoom level
  };

  constructor(private salesVisitService: SalesVisitService) {}

  ngAfterViewInit() {}

  ngOnInit(): void {
    // Fetch sales visit data and then initialize the map
    this.salesVisitService.getSalesVisits().subscribe((visits) => {
      this.salesVisits = visits;
      this.initializeMap();
    });

    this.salesVisitService.getSalesVisitsAllData().subscribe((visits) => {
      this.salesVisitsAllData = visits;
    });
  }

  initializeMap() {
    const map = L.map('map').setView([19.076, 72.8777], 13.5); // Center: Mumbai

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(map);

    const radiusInMeters = 400;

    this.salesVisits.forEach((salesVisitsData, index) => {
      const circle = L.circle(
        [salesVisitsData.latitude, salesVisitsData.longitude],
        {
          radius: radiusInMeters,
          // color: 'blue',
          color: 'black',
          fillColor: salesVisitsData.color || '#4db8ff',
          fillOpacity: 0.4,
        }
      ).addTo(map);
    });
  }
}
