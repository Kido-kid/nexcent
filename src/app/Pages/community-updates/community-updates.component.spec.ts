import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityUpdatesComponent } from './community-updates.component';

describe('CommunityUpdatesComponent', () => {
  let component: CommunityUpdatesComponent;
  let fixture: ComponentFixture<CommunityUpdatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommunityUpdatesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommunityUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
