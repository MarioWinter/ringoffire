import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { GameService } from "../shared/components/game.service";

@Component({
    selector: "app-game",
    standalone: true,
    imports: [CommonModule],
    templateUrl: "./game.component.html",
    styleUrl: "./game.component.scss",
})
export class GameComponent {
    isPickCard: boolean = false;
    currentCard: string | null = "";
    game = inject(GameService);

    constructor() {
        this.startNewGame();
    }

    takeCard() {
        if (!this.isPickCard) {
            this.isPickCard = true;
            this.currentCard = this.game.stack.pop() || "";
            this.takeNextCard();
        }
    }

    takeNextCard() {
        setTimeout(() => {
            this.isPickCard = false;
        }, 1500);
    }

    startNewGame() {
        console.log(this.game);
    }
}
