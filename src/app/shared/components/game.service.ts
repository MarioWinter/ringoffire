import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class GameService {
    public players: string[] = [];
    public stack: string[] = [];
    public playedCards: string[] = [];
    public currentPlayer: number = 0;
    constructor() {
        this.players = [];
        this.fillStackAtGameStart();
        this.shuffleStack();
    }

    fillStackAtGameStart() {
        for (let i = 1; i < 14; i++) {
            this.stack.push("ace_" + i);
            this.stack.push("clubs_" + i);
            this.stack.push("diamonds_" + i);
            this.stack.push("hearts_" + i);
        }
    }

    shuffleStack() {
        this.stack = this.shuffle(this.stack);
    }

    shuffle(array: string[]): string[] {
        return array.sort(() => Math.random() - 0.5);
    }
}
