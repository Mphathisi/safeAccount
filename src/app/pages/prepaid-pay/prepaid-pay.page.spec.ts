import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrepaidPayPage } from './prepaid-pay.page';

describe('PrepaidPayPage', () => {
  let component: PrepaidPayPage;
  let fixture: ComponentFixture<PrepaidPayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrepaidPayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrepaidPayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
