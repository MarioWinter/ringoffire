import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { GameService } from "../shared/components/game.service";
import { PlayerComponent } from "../shared/components/player/player.component";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { DialogAddPlayerComponent } from "../shared/components/dialog-add-player/dialog-add-player.component";
import { MatCardModule } from "@angular/material/card";
import { GameInfoComponent } from "../shared/components/game-info/game-info.component";

@Component({
    selector: "app-game",
    standalone: true,
    imports: [CommonModule, PlayerComponent, MatButtonModule, MatIconModule, MatDialogModule, DialogAddPlayerComponent, MatCardModule, GameInfoComponent],
    templateUrl: "./game.component.html",
    styleUrl: "./game.component.scss",
})
export class GameComponent {
    isPickCard = false;
    currentCard = "";
    playedCard = "";
    game = inject(GameService);

    constructor(public dialog: MatDialog) {}

    takeCard() {
        if (!this.isPickCard) {
            this.isPickCard = true;
            this.currentCard = this.game.stack.pop() || "";
            this.takeNextCard();
            this.selectNextPlayer();
        }
    }

    selectNextPlayer() {
        this.game.currentPlayer++;
        this.game.currentPlayer = this.game.currentPlayer % this.game.players.length;
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

    openDialog(): void {
        const dialogRef = this.dialog.open(DialogAddPlayerComponent);

        dialogRef.afterClosed().subscribe((name: string) => {
            if (name && name.length > 0) {
                this.game.players.push(name);
            }
        });
    }
}
