import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { GameService } from "../shared/components/game.service";
import { PlayerComponent } from "../shared/components/player/player.component";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { DialogAddPlayerComponent } from "../shared/components/dialog-add-player/dialog-add-player.component";
@Component({
    selector: "app-game",
    standalone: true,
    imports: [CommonModule, PlayerComponent, MatButtonModule, MatIconModule, MatDialogModule, DialogAddPlayerComponent],
    templateUrl: "./game.component.html",
    styleUrl: "./game.component.scss",
})
export class GameComponent {
    isPickCard = false;
    currentCard = "";
    playedCard = "";
    game = inject(GameService);

    constructor(public dialog: MatDialog) {
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

    openDialog(): void {
        const dialogRef = this.dialog.open(DialogAddPlayerComponent, {});

        dialogRef.afterClosed().subscribe((name: string) => {
            this.game.players.push(name);
        });
    }
}
