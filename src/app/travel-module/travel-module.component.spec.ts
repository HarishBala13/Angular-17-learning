import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelModuleComponent } from './travel-module.component';

describe('TravelModuleComponent', () => {
  let component: TravelModuleComponent;
  let fixture: ComponentFixture<TravelModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TravelModuleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TravelModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
