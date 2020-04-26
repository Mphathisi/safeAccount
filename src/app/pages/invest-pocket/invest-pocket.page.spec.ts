import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InvestPocketPage } from './invest-pocket.page';

describe('InvestPocketPage', () => {
  let component: InvestPocketPage;
  let fixture: ComponentFixture<InvestPocketPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestPocketPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InvestPocketPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
