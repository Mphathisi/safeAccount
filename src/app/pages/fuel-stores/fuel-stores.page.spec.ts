import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FuelStoresPage } from './fuel-stores.page';

describe('FuelStoresPage', () => {
  let component: FuelStoresPage;
  let fixture: ComponentFixture<FuelStoresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuelStoresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FuelStoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
