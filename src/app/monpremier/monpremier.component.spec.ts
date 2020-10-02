import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonpremierComponent } from './monpremier.component';

describe('MonpremierComponent', () => {
  let component: MonpremierComponent;
  let fixture: ComponentFixture<MonpremierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonpremierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonpremierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
