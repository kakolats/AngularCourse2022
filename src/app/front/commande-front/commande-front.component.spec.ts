import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeFrontComponent } from './commande-front.component';

describe('CommandeFrontComponent', () => {
  let component: CommandeFrontComponent;
  let fixture: ComponentFixture<CommandeFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandeFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandeFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
