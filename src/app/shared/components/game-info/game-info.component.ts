import { Component } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";

@Component({
    selector: "app-game-info",
    standalone: true,
    imports: [MatCardModule, MatIconModule],
    templateUrl: "./game-info.component.html",
    styleUrl: "./game-info.component.scss",
})
export class GameInfoComponent {}
