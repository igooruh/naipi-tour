import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuinchoTioQueridoPage } from './quincho-tio-querido.page';

describe('QuinchoTioQueridoPage', () => {
  let component: QuinchoTioQueridoPage;
  let fixture: ComponentFixture<QuinchoTioQueridoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ QuinchoTioQueridoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuinchoTioQueridoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
