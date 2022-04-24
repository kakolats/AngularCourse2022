import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAdminListByCategorieComponent } from './product-admin-list-by-categorie.component';

describe('ProductAdminListByCategorieComponent', () => {
  let component: ProductAdminListByCategorieComponent;
  let fixture: ComponentFixture<ProductAdminListByCategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductAdminListByCategorieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAdminListByCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
