import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GeneralTransferPage } from './general-transfer.page';

describe('GeneralTransferPage', () => {
  let component: GeneralTransferPage;
  let fixture: ComponentFixture<GeneralTransferPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralTransferPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GeneralTransferPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
