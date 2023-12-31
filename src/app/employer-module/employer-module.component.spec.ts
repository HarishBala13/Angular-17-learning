import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerModuleComponent } from './employer-module.component';

describe('EmployerModuleComponent', () => {
  let component: EmployerModuleComponent;
  let fixture: ComponentFixture<EmployerModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployerModuleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployerModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
