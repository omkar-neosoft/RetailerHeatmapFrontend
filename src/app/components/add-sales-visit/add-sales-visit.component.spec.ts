import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSalesVisitComponent } from './add-sales-visit.component';

describe('AddSalesVisitComponent', () => {
  let component: AddSalesVisitComponent;
  let fixture: ComponentFixture<AddSalesVisitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddSalesVisitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSalesVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
