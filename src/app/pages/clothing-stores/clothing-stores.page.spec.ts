import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClothingStoresPage } from './clothing-stores.page';

describe('ClothingStoresPage', () => {
  let component: ClothingStoresPage;
  let fixture: ComponentFixture<ClothingStoresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClothingStoresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClothingStoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
