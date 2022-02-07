import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeListByDateComponent } from './commande-list-by-date.component';

describe('CommandeListByDateComponent', () => {
  let component: CommandeListByDateComponent;
  let fixture: ComponentFixture<CommandeListByDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandeListByDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandeListByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
