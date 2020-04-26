import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PayFuelPage } from './pay-fuel.page';

describe('PayFuelPage', () => {
  let component: PayFuelPage;
  let fixture: ComponentFixture<PayFuelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayFuelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PayFuelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
