import { provideHttpClient } from "@angular/common/http";
import { ApplicationConfig } from "@angular/core";
import { provideRouter, Routes } from "@angular/router";
import { provideStore } from "@ngxs/store";
import { CharactersState } from "@store/characters/characters.state";
import { FavoritesState } from "@store/favorites/favorites.state";
import { PaginationState } from "@store/pagination/pagination.state";
import { routes } from "./app.routes";

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore([FavoritesState, CharactersState, PaginationState]),
    provideHttpClient(),
    provideRouter(routes),
  ]
};

    // NgxsDispatchPluginModule.forRoot(),
    // NgxsModule.forRoot([FavoritesState, CharactersState, PaginationState]),
    // environment.production ? [] : NgxsReduxDevtoolsPluginModule.forRoot(),
    // environment.production ? [] : NgxsLoggerPluginModule.forRoot(),