import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundPokemonComponent } from './found-pokemon.component';

describe('FoundPokemonComponent', () => {
  let component: FoundPokemonComponent;
  let fixture: ComponentFixture<FoundPokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoundPokemonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
