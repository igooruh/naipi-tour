import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TurismoPuertoIguazuPage } from './turismo-puerto-iguazu.page';

describe('TurismoPuertoIguazuPage', () => {
  let component: TurismoPuertoIguazuPage;
  let fixture: ComponentFixture<TurismoPuertoIguazuPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TurismoPuertoIguazuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TurismoPuertoIguazuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
