import { Component } from '@angular/core';
import { SalesVisitDto } from '../../models/sales-visit-dto';
import { SalesVisitService } from '../../services/sales-visit/sales-visit.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-sales-visit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-sales-visit.component.html',
  styleUrl: './add-sales-visit.component.css',
})
export class AddSalesVisitComponent {
  salesVisit: SalesVisitDto = {
    visitId: 0,
    retailerId: 0,
    salespersonId: 0,
    visitDate: '',
    latitude: 0,
    longitude: 0,
  };

  constructor(
    private salesVisitService: SalesVisitService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  addSalesVisit() {
    this.salesVisitService
      .addSalesVisit(this.salesVisit)
      .subscribe((response) => {
        console.log('Sales Visit Added:', response);
        alert('Sales Visit Added Successfully');
        this.router.navigate(['/']);
      });
  }
}
