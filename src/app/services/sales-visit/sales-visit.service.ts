import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SalesVisitDto } from '../../models/sales-visit-dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SalesVisitService {
  private apiUrl = `https://localhost:7004/api/SalesVisit`;

  constructor(private http: HttpClient) {}

  getSalesVisits(): Observable<SalesVisitDto[]> {
    return this.http.get<SalesVisitDto[]>(`${this.apiUrl}/heatmap`);
  }

  // Get all SalesVisits
  getSalesVisitsAllData(): Observable<SalesVisitDto[]> {
    return this.http.get<SalesVisitDto[]>(`${this.apiUrl}`);
  }

  // Add a new SalesVisit
  addSalesVisit(salesVisitDto: SalesVisitDto): Observable<SalesVisitDto> {
    return this.http.post<SalesVisitDto>(this.apiUrl, salesVisitDto);
  }
}
