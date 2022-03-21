import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RateRestroPage } from './rate-restro.page';

describe('RateRestroPage', () => {
  let component: RateRestroPage;
  let fixture: ComponentFixture<RateRestroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateRestroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RateRestroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
