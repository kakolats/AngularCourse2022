import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieAdminComponent } from './categorie-admin.component';

describe('CategorieAdminComponent', () => {
  let component: CategorieAdminComponent;
  let fixture: ComponentFixture<CategorieAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorieAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorieAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
