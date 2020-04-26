import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelfPayPage } from './self-pay.page';

describe('SelfPayPage', () => {
  let component: SelfPayPage;
  let fixture: ComponentFixture<SelfPayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfPayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelfPayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
