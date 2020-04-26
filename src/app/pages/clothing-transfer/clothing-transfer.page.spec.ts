import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClothingTransferPage } from './clothing-transfer.page';

describe('ClothingTransferPage', () => {
  let component: ClothingTransferPage;
  let fixture: ComponentFixture<ClothingTransferPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClothingTransferPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClothingTransferPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
