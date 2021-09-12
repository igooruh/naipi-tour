import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TurismoCiudadLestePage } from './turismo-ciudad-leste.page';

describe('TurismoCiudadLestePage', () => {
  let component: TurismoCiudadLestePage;
  let fixture: ComponentFixture<TurismoCiudadLestePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TurismoCiudadLestePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TurismoCiudadLestePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
