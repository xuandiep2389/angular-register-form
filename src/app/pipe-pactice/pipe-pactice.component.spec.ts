import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipePacticeComponent } from './pipe-pactice.component';

describe('PipePacticeComponent', () => {
  let component: PipePacticeComponent;
  let fixture: ComponentFixture<PipePacticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipePacticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipePacticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
