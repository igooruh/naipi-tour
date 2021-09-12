import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GastronomiaPuertoIguazuPage } from './gastronomia-puerto-iguazu.page';

describe('GastronomiaPuertoIguazuPage', () => {
  let component: GastronomiaPuertoIguazuPage;
  let fixture: ComponentFixture<GastronomiaPuertoIguazuPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GastronomiaPuertoIguazuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GastronomiaPuertoIguazuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
