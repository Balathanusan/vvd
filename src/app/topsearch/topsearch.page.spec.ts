import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TopsearchPage } from './topsearch.page';

describe('TopsearchPage', () => {
  let component: TopsearchPage;
  let fixture: ComponentFixture<TopsearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopsearchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TopsearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
