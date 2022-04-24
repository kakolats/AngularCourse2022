import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeAdminComponent } from './commande-admin.component';

describe('CommandeAdminComponent', () => {
  let component: CommandeAdminComponent;
  let fixture: ComponentFixture<CommandeAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandeAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandeAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
