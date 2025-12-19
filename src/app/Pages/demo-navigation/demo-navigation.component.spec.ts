import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoNavigationComponent } from './demo-navigation.component';

describe('DemoNavigationComponent', () => {
  let component: DemoNavigationComponent;
  let fixture: ComponentFixture<DemoNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoNavigationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
