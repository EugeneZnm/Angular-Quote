import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotePublisherComponent } from './quote-publisher.component';

describe('QuotePublisherComponent', () => {
  let component: QuotePublisherComponent;
  let fixture: ComponentFixture<QuotePublisherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotePublisherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotePublisherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
