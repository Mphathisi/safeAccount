import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelfTransferPage } from './self-transfer.page';

describe('SelfTransferPage', () => {
  let component: SelfTransferPage;
  let fixture: ComponentFixture<SelfTransferPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfTransferPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelfTransferPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
