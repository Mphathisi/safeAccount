import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GeneralPayPage } from './general-pay.page';

describe('GeneralPayPage', () => {
  let component: GeneralPayPage;
  let fixture: ComponentFixture<GeneralPayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralPayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GeneralPayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
