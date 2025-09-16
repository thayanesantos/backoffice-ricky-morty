import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';

import { FavoriteFacade } from '../../shared/facades/favorite.facade';
import { FavoritesService } from '../../shared/services/favorites.service';
import { FavoriteComponent } from './favorite.component';
import { ContainerComponent } from '../../core/container/container.component';

describe('FavoriteComponent', () => {
  let component: FavoriteComponent;
  let fixture: ComponentFixture<FavoriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [HttpClientTestingModule, NgxsModule.forRoot(), ContainerComponent, ReactiveFormsModule, FavoriteComponent],
    providers: [FavoritesService, FavoriteFacade]
})
      .compileComponents();

    fixture = TestBed.createComponent(FavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});