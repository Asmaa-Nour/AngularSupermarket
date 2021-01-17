import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOneItemComponent } from './product-one-item.component';

describe('ProductOneItemComponent', () => {
  let component: ProductOneItemComponent;
  let fixture: ComponentFixture<ProductOneItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductOneItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductOneItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
