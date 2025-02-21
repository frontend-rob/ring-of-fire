import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Player {
  name: string;
  avatar: string;
  color: string;
}

@Component({
  selector: 'app-player',
  imports: [CommonModule],
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent {
  @Input() player!: Player;
  @Input() activePlayer: boolean = false;
  
  hover: boolean = false;
}