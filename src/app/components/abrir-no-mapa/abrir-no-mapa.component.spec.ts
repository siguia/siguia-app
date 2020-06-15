import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AbrirNoMapaComponent } from './abrir-no-mapa.component';

describe('AbrirNoMapaComponent', () => {
  let component: AbrirNoMapaComponent;
  let fixture: ComponentFixture<AbrirNoMapaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbrirNoMapaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AbrirNoMapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
