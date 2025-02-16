import { Component, Input } from '@angular/core';
import { Game } from '../../models/game';

@Component({
    selector: 'app-card-info',
    imports: [],
    templateUrl: './card-info.component.html',
    styleUrl: './card-info.component.scss'
})

export class CardInfoComponent {

    cardAction = [
        { title: 'Set the Pace', description: 'Everyone drinks until you stop. Show ‘em who’s in charge! Keep it fun and fair.' },
        { title: 'Choose', description: 'You’re the boss! Pick a player who has to drink. No arguing! Make it a good choice.' },
        { title: 'Me', description: 'Tough luck! Grab your drink and chug. Better luck next time!' },
        { title: 'Drink Some More', description: 'Everyone drinks for 4 seconds. No excuses, no mercy! Stay hydrated!' },
        { title: 'Thumb Master', description: 'Place your thumb on the table. Last to notice drinks! Use this power wisely.' },
        { title: 'Mix It Up', description: 'Swap drinks with another player. Hope you like surprises! Enjoy the new taste.' },
        { title: 'Hands To Heaven', description: 'Throw your hands up! Last to follow drinks. Use this power wisely.' },
        { title: 'Mate', description: 'Choose a drinking buddy. Every time you drink, they drink too. Partners in crime!' },
        { title: 'Bust a Rhyme', description: 'Say a word. Next player rhymes. Hesitate or repeat, you drink! Keep it going!' },
        { title: 'Categories', description: 'Pick a category. Next player says something that fits. Hesitate or repeat, you drink!' },
        { title: 'Make a Rule', description: 'Create a new rule for the group. Break the rule, take a sip! Be creative!' },
        { title: 'Question Master', description: 'If anyone answers your question, they drink! Keep this power until the next queen.' },
        { title: 'The King’s Cup', description: 'Pour a bit of your drink into the king’s cup. Last king drawn drinks the whole thing.' },
    ];

    title: string = '';
    description: string = '';

    @Input() card?: string;
    @Input() game!: Game;

    ngOnChanges(): void {
        if (this.card) {
            console.log('current card is:', this.card);
            let cardNumber = +this.card.split('_')[1];
            this.title = this.cardAction[cardNumber - 1].title;
            this.description = this.cardAction[cardNumber - 1].description;
        }
    }
};