import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EducationTransferPage } from './education-transfer.page';

describe('EducationTransferPage', () => {
  let component: EducationTransferPage;
  let fixture: ComponentFixture<EducationTransferPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationTransferPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EducationTransferPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
