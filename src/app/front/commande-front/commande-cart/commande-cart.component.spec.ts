import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeCartComponent } from './commande-cart.component';

describe('CommandeCartComponent', () => {
  let component: CommandeCartComponent;
  let fixture: ComponentFixture<CommandeCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandeCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandeCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
