import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAnimeComponent } from './my-anime.component';

describe('MyAnimeComponent', () => {
  let component: MyAnimeComponent;
  let fixture: ComponentFixture<MyAnimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAnimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyAnimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
