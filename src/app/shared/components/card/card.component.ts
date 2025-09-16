import { Component, Input } from '@angular/core';
import { ICharacter } from '@interfaces/character.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class CardComponent {
  @Input() card!: ICharacter;

}