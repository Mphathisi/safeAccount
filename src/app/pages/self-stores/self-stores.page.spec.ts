import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelfStoresPage } from './self-stores.page';

describe('SelfStoresPage', () => {
  let component: SelfStoresPage;
  let fixture: ComponentFixture<SelfStoresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfStoresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelfStoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
