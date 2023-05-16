import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TownPreviewComponent } from './town-preview.component';

describe('TownPreviewComponent', () => {
  let component: TownPreviewComponent;
  let fixture: ComponentFixture<TownPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TownPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TownPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
