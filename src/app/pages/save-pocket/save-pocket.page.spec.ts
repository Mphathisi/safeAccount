import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SavePocketPage } from './save-pocket.page';

describe('SavePocketPage', () => {
  let component: SavePocketPage;
  let fixture: ComponentFixture<SavePocketPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavePocketPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SavePocketPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
