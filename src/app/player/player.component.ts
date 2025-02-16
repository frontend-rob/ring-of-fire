import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-player',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './player.component.html',
    styleUrls: ['./player.component.scss']
})

export class PlayerComponent {
    @Input() player!: { name: string; color: string; avatar: string };
    @Input() activePlayer: boolean = false;
};