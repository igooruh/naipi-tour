import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GastronomiaCiudadLestePage } from './gastronomia-ciudad-leste.page';

describe('GastronomiaCiudadLestePage', () => {
  let component: GastronomiaCiudadLestePage;
  let fixture: ComponentFixture<GastronomiaCiudadLestePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GastronomiaCiudadLestePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GastronomiaCiudadLestePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
