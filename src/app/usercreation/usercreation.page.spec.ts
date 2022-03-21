import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UsercreationPage } from './usercreation.page';

describe('UsercreationPage', () => {
  let component: UsercreationPage;
  let fixture: ComponentFixture<UsercreationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsercreationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UsercreationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
