import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CharactersFacade } from '../../shared/facades/character.facade';
import { ContainerComponent } from '@core/container/container.component';
import { PaginationComponent } from '@components/pagination/pagination.component';
import { CommonModule } from '@angular/common';

export interface ItemPagination {
  page: string, current: number
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [CharactersFacade],
  imports: [FormsModule, ReactiveFormsModule, ContainerComponent, PaginationComponent, CommonModule] 
})
export class HomeComponent implements OnInit {


  homeCharactersList$ = this.facadeService.characters$;
  pagination$ = this.facadeService.pagination$;
  onError$ = this.facadeService.onError$;
  search: FormControl = new FormControl();
  start: number = 0;
  end: number = 10;
  current: number = 1;
  constructor(
    @Inject(CharactersFacade) protected facadeService: CharactersFacade
  ) { }

  ngOnInit(): void {
    this.facadeService.getAllCharactersPerPage(1);
  }


  changePage(event: { page: string }) {
    console.log('New page requested:', event.page);
    return this.facadeService.getAllCharactersPerPage(event.page)
  }

}