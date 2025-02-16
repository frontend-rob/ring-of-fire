import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { MatButtonModule } from '@angular/material/button';
import { Game } from '../../models/game';

@Component({
    selector: 'app-start-screen',
    imports: [MatButtonModule],
    templateUrl: './start-screen.component.html',
    styleUrls: ['./start-screen.component.scss']
})

export class StartScreenComponent {
    private firestore: Firestore = inject(Firestore);

    constructor(private router: Router) { }

    startNewGame() {
        let game = new Game();
        const gamesCollection = collection(this.firestore, 'games');

        addDoc(gamesCollection, game.toJson()).then((gameInfo: any) => {
            this.router.navigate(['/game/' + gameInfo['id']]);
        }).catch((error) => {
            console.error('Error creating new game: ', error);
        });
    }
};