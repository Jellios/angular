import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParagraafComponent } from './paragraaf.component';

describe('ParagraafComponent', () => {
  let component: ParagraafComponent;
  let fixture: ComponentFixture<ParagraafComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParagraafComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParagraafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
