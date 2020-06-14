import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaParceirosPage } from './lista-parceiros.page';

describe('ListaParceirosPage', () => {
  let component: ListaParceirosPage;
  let fixture: ComponentFixture<ListaParceirosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaParceirosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaParceirosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
