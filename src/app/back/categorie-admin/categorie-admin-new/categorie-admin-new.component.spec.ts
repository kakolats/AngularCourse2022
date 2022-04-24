import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieAdminNewComponent } from './categorie-admin-new.component';

describe('CategorieAdminNewComponent', () => {
  let component: CategorieAdminNewComponent;
  let fixture: ComponentFixture<CategorieAdminNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorieAdminNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorieAdminNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
