import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsShowcaseComponent } from './news-showcase.component';

describe('NewsShowcaseComponent', () => {
  let component: NewsShowcaseComponent;
  let fixture: ComponentFixture<NewsShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsShowcaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
