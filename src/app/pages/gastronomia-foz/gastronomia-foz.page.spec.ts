import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GastronomiaFozPage } from './gastronomia-foz.page';

describe('GastronomiaFozPage', () => {
  let component: GastronomiaFozPage;
  let fixture: ComponentFixture<GastronomiaFozPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GastronomiaFozPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GastronomiaFozPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
