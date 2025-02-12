export class Game {

    public players: string[] = [];
    public stack: string[] = [];
    public playedCards: string[] = [];
    public currentPlayer: number = 0;


    constructor() {
        for (let i = 1; i < 14; i++) {
            const number = i.toString().padStart(2, '0');
            this.stack.push('clubs_' + number);
            this.stack.push('diamonds_' + number);
            this.stack.push('hearts_' + number);
            this.stack.push('spades_' + number);
        }

        shuffleCards(this.stack);
    }
}


function shuffleCards(array: string[]) {
    let currentIndex = array.length;

    while (currentIndex != 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }
}