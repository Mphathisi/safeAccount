import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClothingPayPage } from './clothing-pay.page';

describe('ClothingPayPage', () => {
  let component: ClothingPayPage;
  let fixture: ComponentFixture<ClothingPayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClothingPayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClothingPayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
