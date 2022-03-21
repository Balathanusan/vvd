import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChefDetailPage } from './chef-detail.page';

describe('ChefDetailPage', () => {
  let component: ChefDetailPage;
  let fixture: ComponentFixture<ChefDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChefDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChefDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
