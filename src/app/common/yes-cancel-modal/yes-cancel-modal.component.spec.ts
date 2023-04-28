import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YesCancelModalComponent } from './yes-cancel-modal.component';

describe('YesCancelModalComponent', () => {
  let component: YesCancelModalComponent;
  let fixture: ComponentFixture<YesCancelModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [YesCancelModalComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(YesCancelModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
