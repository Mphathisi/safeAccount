import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EducationPayPage } from './education-pay.page';

describe('EducationPayPage', () => {
  let component: EducationPayPage;
  let fixture: ComponentFixture<EducationPayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationPayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EducationPayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
