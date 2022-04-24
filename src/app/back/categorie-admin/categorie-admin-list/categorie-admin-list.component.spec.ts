import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieAdminListComponent } from './categorie-admin-list.component';

describe('CategorieAdminListComponent', () => {
  let component: CategorieAdminListComponent;
  let fixture: ComponentFixture<CategorieAdminListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorieAdminListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorieAdminListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
