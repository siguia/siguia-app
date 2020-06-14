import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ParceiroPage } from './parceiro.page';

describe('ParceiroPage', () => {
  let component: ParceiroPage;
  let fixture: ComponentFixture<ParceiroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParceiroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ParceiroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
