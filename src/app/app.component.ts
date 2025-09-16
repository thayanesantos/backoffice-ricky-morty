import { Component } from '@angular/core';
import { HeaderComponent, IMenuOptions } from '@core/header/header.component';
import { FavoriteFacade } from '@facades/favorite.facade';
import { Observable } from 'rxjs';
import { FooterComponent } from '@core/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { environment } from '@environments/environment.dev';
import { NgxsDispatchPluginModule } from '@ngxs-labs/dispatch-decorator';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsModule, withNgxsPlugin } from '@ngxs/store';
import { CharactersState } from '@store/characters/characters.state';
import { FavoritesState } from '@store/favorites/favorites.state';
import { PaginationState } from '@store/pagination/pagination.state';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [FavoriteFacade],
  imports: [
    RouterOutlet,
    FooterComponent,
    HeaderComponent,
    CommonModule
  ]

})
export class AppComponent {


  bagde$: Observable<number> = this.favoritefacade.favoritesQuantity$;
  menuOptions: IMenuOptions[] = [
    {
      icon: 'assets/icons/house-filled.svg',
      url: 'home',
      urlName: 'Início'
    },
    {
      icon: 'assets/icons/heart-filled.svg',
      url: '/favorites',
      urlName: 'Favoritos',
      badge: this.bagde$
    },
  ];

  constructor(readonly favoritefacade: FavoriteFacade) { }
}