import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OnlineMenuPage } from './online-menu.page';

describe('OnlineMenuPage', () => {
  let component: OnlineMenuPage;
  let fixture: ComponentFixture<OnlineMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineMenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OnlineMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
