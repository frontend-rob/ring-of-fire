import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Game } from '../../models/game';
import { PlayerComponent } from '../player/player.component';
import { CardInfoComponent } from '../card-info/card-info.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalAddPlayerComponent } from '../modal-add-player/modal-add-player.component';
import { Firestore, collection, collectionData, addDoc, doc, docData, updateDoc } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';

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

    private firestore: Firestore = inject(Firestore);

    game!: Game;
    gameID!: string;

    constructor(public dialog: MatDialog, private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.newGame();
        this.route.params.subscribe((params) => {
            console.log(params['id']);
            this.gameID = params['id'];
            const gameDoc = doc(this.firestore, `games/${this.gameID}`);
            docData(gameDoc).subscribe((game: any) => {
                console.log('Game update', game);
                this.game.players = game.players;
                this.game.stack = game.stack;
                this.game.playedCards = game.playedCards;
                this.game.currentPlayer = game.currentPlayer;
                this.game.drawCardAnimation = game.drawCardAnimation;
                this.game.currentCard = game.currentCard;
            });
        });
    }

    newGame() {
        this.game = new Game();
    }

    drawCard() {
        if (this.game.players.length > 0 && !this.game.drawCardAnimation) {
            this.game.currentCard = this.game.stack.pop()!;
            this.game.drawCardAnimation = true;
            console.log('Drawn card is:' + this.game.currentCard);
            console.log(this.game);
            this.game.currentPlayer++;
            this.game.currentPlayer = this.game.currentPlayer % this.game.players.length;
            this.saveGame();

            setTimeout(() => {
                this.game.playedCards.push(this.game.currentCard);
                this.game.drawCardAnimation = false;
                this.saveGame();
            }, 1250);
        }
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(ModalAddPlayerComponent);

        dialogRef.afterClosed().subscribe((player: { name: string, color: string, avatar: string }) => {
            if (player && player.name.length > 0 && this.game.players.length < this.game.maxPlayers) {
                this.game.players.push(player);
                this.saveGame();
            }
        });
    }

    saveGame() {
        const gameDoc = doc(this.firestore, `games/${this.gameID}`);
        updateDoc(gameDoc, this.game.toJson()).then(() => {
            console.log('Game successfully updated!');
        }).catch((error) => {
            console.error('Error updating game: ', error);
        });
    }
};