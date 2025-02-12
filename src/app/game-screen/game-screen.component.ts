import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Game } from '../../models/game';
import { PlayerComponent } from '../player/player.component';
import { CardInfoComponent } from '../card-info/card-info.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalAddPlayerComponent } from '../modal-add-player/modal-add-player.component';

@Component({
    selector: 'app-game-screen',
    standalone: true,
    imports: [
        CommonModule,
        PlayerComponent,
        CardInfoComponent,
        MatButtonModule,
        MatIconModule,
        MatDialogModule,
        CardInfoComponent
    ],
    templateUrl: './game-screen.component.html',
    styleUrls: ['./game-screen.component.scss']
})

export class GameScreenComponent {
    drawCardAnimation: boolean = false;
    currentCard: string = '';
    game!: Game;

    constructor(public dialog: MatDialog) { }

    ngOnInit(): void {
        this.newGame();
    }

    newGame() {
        this.game = new Game();
    }

    drawCard() {
        if (!this.drawCardAnimation) {
            this.currentCard = this.game.stack.pop()!;
            this.drawCardAnimation = true;
            console.log('Drawn card is:' + this.currentCard);
            console.log(this.game);

            this.game.currentPlayer++;
            this.game.currentPlayer = this.game.currentPlayer % this.game.players.length;

            setTimeout(() => {
                this.game.playedCards.push(this.currentCard);
                this.drawCardAnimation = false;
            }, 2500);
        }
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(ModalAddPlayerComponent);

        dialogRef.afterClosed().subscribe((name: string) => {
            if (name && name.length > 0) this.game.players.push(name);
        });
    }
}