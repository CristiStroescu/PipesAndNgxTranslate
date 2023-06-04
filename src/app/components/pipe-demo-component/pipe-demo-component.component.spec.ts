import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeDemoComponentComponent } from './pipe-demo-component.component';

describe('PipeDemoComponentComponent', () => {
  let component: PipeDemoComponentComponent;
  let fixture: ComponentFixture<PipeDemoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeDemoComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipeDemoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
