import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendHelmetComponent } from './vend-helmet.component';

describe('VendHelmetComponent', () => {
  let component: VendHelmetComponent;
  let fixture: ComponentFixture<VendHelmetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VendHelmetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VendHelmetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
