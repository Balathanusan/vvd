import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GooglesearchPage } from './googlesearch.page';

describe('GooglesearchPage', () => {
  let component: GooglesearchPage;
  let fixture: ComponentFixture<GooglesearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GooglesearchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GooglesearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
