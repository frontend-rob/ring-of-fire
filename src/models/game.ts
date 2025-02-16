export class Game {

    public players: { name: string, color: string, avatar: string }[] = [];
    public stack: string[] = [];
    public playedCards: string[] = [];
    public currentPlayer: number = 0;
    public drawCardAnimation: boolean = false;
    public currentCard: string = '';
    public maxPlayers: number = 4;

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

    public toJson() {
        return {
            players: this.players,
            stack: this.stack,
            playedCards: this.playedCards,
            currentPlayer: this.currentPlayer,
            drawCardAnimation: this.drawCardAnimation,
            currentCard: this.currentCard,
            maxPlayers: this.maxPlayers
        };
    }

    public hasPlayers(): boolean {
        return this.players.length > 0;
    }
};

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
};