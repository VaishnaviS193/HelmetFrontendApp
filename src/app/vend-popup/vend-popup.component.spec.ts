import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendPopupComponent } from './vend-popup.component';

describe('VendPopupComponent', () => {
  let component: VendPopupComponent;
  let fixture: ComponentFixture<VendPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VendPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VendPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
