import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class GameService {
    public players: string[] = [];
    public stack: string[] = [];
    public playedCards: string[] = [];
    public currentPlayer: number = 0;
    constructor() {}
}
