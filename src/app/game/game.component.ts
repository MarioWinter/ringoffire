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
    ispickCard = false;
    newGame = inject(GameService);

    constructor() {
        this.startNewGame();
    }

    takeCard() {
        this.ispickCard = true;
    }

    startNewGame() {
        console.log(this.newGame);
    }
}
