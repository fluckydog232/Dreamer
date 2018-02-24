import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteAttendeesComponent } from './website-attendees.component';

describe('WebsiteAttendeesComponent', () => {
  let component: WebsiteAttendeesComponent;
  let fixture: ComponentFixture<WebsiteAttendeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebsiteAttendeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsiteAttendeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
