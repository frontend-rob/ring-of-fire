import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-card-info',
    imports: [],
    templateUrl: './card-info.component.html',
    styleUrl: './card-info.component.scss'
})

export class CardInfoComponent {

    cardAction = [
        { title: 'Set the pace', description: 'Everyone drinks until you stop. Show ‘em who’s in charge!' },
        { title: 'Choose', description: 'You’re the boss! Pick a player who has to drink. No arguing!' },
        { title: 'Me', description: 'Tough luck! Grab your drink and chug.' },
        { title: 'Drink some more', description: 'Everyone drinks for 4 seconds. No excuses, no mercy!' },
        { title: 'Thumb master', description: 'Place your thumb on the table at any time. The last player to notice and copy you drinks! You can only use this power once, so time it right.' },
        { title: 'Mix it up', description: 'Swap drinks with another player for the rest of the game. Hope you like surprises!' },
        { title: 'Hands to heaven', description: 'Throw your hands up! The last person to follow suits drinks. Just like the thumb master, you can only use this power once – make it count!' },
        { title: 'Mate', description: 'Choose a drinking buddy. From now on, every time you drink, they drink too. Partners in crime!' },
        { title: 'Bust a rhyme', description: 'Say a word. The next player has to rhyme with it. Keep going until someone hesitates or repeats a word. Loser drinks!' },
        { title: 'Categories', description: 'Pick a category (like beer brands). The next player has to say something that fits. If someone hesitates or repeats, they drink!' },
        { title: 'Make a rule', description: 'Create a new rule for the group, like “no one can say ‘drink.’” Break the rule? Take a sip!' },
        { title: 'Question master', description: 'If anyone answers a question you ask, they drink! You keep this power until the next queen is drawn, so trap as many people as you can!' },
        { title: 'The king’s cup', description: 'Pour a bit of your drink into the king’s cup in the middle. Whoever draws the last king has to drink the whole thing. Pray for mercy!' },
    ];

    title: string = '';
    description: string = '';

    @Input() card?: string;

    ngOnChanges(): void {
        if (this.card) {
            console.log('current card is:', this.card);
            let cardNumber = +this.card.split('_')[1];
            this.title = this.cardAction[cardNumber - 1].title;
            this.description = this.cardAction[cardNumber - 1].description;
        }
    }
}
