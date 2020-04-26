import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EducationStoresPage } from './education-stores.page';

describe('EducationStoresPage', () => {
  let component: EducationStoresPage;
  let fixture: ComponentFixture<EducationStoresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationStoresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EducationStoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
