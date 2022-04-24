import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAdminNewComponent } from './product-admin-new.component';

describe('ProductAdminNewComponent', () => {
  let component: ProductAdminNewComponent;
  let fixture: ComponentFixture<ProductAdminNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductAdminNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAdminNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
