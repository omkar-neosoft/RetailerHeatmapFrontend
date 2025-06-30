import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesVisitMapComponent } from './sales-visit-map.component';

describe('SalesVisitMapComponent', () => {
  let component: SalesVisitMapComponent;
  let fixture: ComponentFixture<SalesVisitMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalesVisitMapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesVisitMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
