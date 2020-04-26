import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TransferFuelPage } from './transfer-fuel.page';

describe('TransferFuelPage', () => {
  let component: TransferFuelPage;
  let fixture: ComponentFixture<TransferFuelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferFuelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TransferFuelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
