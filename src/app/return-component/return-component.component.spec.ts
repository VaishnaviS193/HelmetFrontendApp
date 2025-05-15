import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnComponentComponent } from './return-component.component';

describe('ReturnComponentComponent', () => {
  let component: ReturnComponentComponent;
  let fixture: ComponentFixture<ReturnComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReturnComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReturnComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
