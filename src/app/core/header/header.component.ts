import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { CommonModule } from '@angular/common';

export interface IMenuOptions {
  url: string;
  icon?: string;
  urlName: string;
  badge?: Observable<number>
}

export interface ILogo {
  image: string;
  alt: string;
  url: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [RouterLink, AsyncPipe, CommonModule]
})
export class HeaderComponent {
  @Input() menuOptions: IMenuOptions[] = [];
  logo: ILogo = {
    image: 'assets/images/logo.svg',
    alt: 'Logo Ricky and Morty',
    url: '/'
  }

  constructor() {
  }


}