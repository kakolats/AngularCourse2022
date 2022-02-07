import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListByCategoriesComponent } from './product-list-by-categories.component';

describe('ProductListByCategoriesComponent', () => {
  let component: ProductListByCategoriesComponent;
  let fixture: ComponentFixture<ProductListByCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListByCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListByCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
