import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DstvPage } from './dstv.page';

describe('DstvPage', () => {
  let component: DstvPage;
  let fixture: ComponentFixture<DstvPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DstvPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DstvPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
