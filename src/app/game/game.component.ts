import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { GameService } from "../shared/components/game.service";
import { PlayerComponent } from "../shared/components/player/player.component";

@Component({
    selector: "app-game",
    standalone: true,
    imports: [CommonModule, PlayerComponent],
    templateUrl: "./game.component.html",
    styleUrl: "./game.component.scss",
})
export class GameComponent {
    isPickCard = false;
    currentCard = "";
    playedCard = "";
    game = inject(GameService);

    constructor() {
        this.startNewGame();
    }

    takeCard() {
        if (!this.isPickCard) {
            this.isPickCard = true;
            this.currentCard = this.game.stack.pop() || "";
            console.log(this.currentCard);
            this.takeNextCard();
        }
    }

    takeNextCard() {
        setTimeout(() => {
            this.showPlayedCard();
            this.isPickCard = false;
        }, 1250);
    }

    showPlayedCard() {
        this.game.playedCards.push(this.currentCard);
    }

    startNewGame() {
        console.log(this.game);
    }
}
